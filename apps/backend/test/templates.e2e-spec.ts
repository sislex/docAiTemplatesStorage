import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import type { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { loadFixture } from '../../../packages/test-utils/src/loadFixture';
import { AppModule } from '../src/app.module';
import { HttpExceptionFilter } from '../src/common/filters/http-exception.filter';

// Load fixtures directly in test

const VALID_META = JSON.stringify({
  name: 'E2E Template',
  description: 'Template for e2e tests',
  placeholders: [
    { name: 'fullName', type: 'string', label: 'Full Name', required: true },
    { name: 'date', type: 'date', label: 'Date', required: true },
    { name: 'amount', type: 'number', label: 'Amount', required: true },
  ],
});

describe('Templates API (e2e)', () => {
  let app: INestApplication;
  let storageRoot: string;

  beforeAll(async () => {
    storageRoot = await mkdtemp(join(tmpdir(), 'e2e-templates-'));
    process.env['STORAGE_ROOT'] = storageRoot;
    process.env['MAX_FILE_SIZE'] = '20971520';

    const module = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = module.createNestApplication();
    app.setGlobalPrefix('api', { exclude: ['/health', '/diagnostics', '/ai'] });
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }),
    );
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
    await rm(storageRoot, { recursive: true, force: true });
  });

  // -----------------------------------------------------------------------
  // POST /api/templates — upload
  // -----------------------------------------------------------------------

  describe('POST /api/templates', () => {
    it('201: uploads a valid DOCX with matching metadata', async () => {
      const docx = loadFixture('valid.docx');
      const res = await request(app.getHttpServer())
        .post('/api/templates')
        .attach('file', docx, {
          filename: 'template.docx',
          contentType: 'application/octet-stream',
        })
        .field('metadata', VALID_META)
        .expect(201);

      expect(res.body.id).toBeTruthy();
      expect(res.body.name).toBe('E2E Template');
    });

    it('400: mismatched keys → validation errors', async () => {
      const docx = loadFixture('valid.docx');
      const badMeta = JSON.stringify({
        name: 'Bad',
        description: 'Bad meta',
        placeholders: [], // no keys but DOCX has 3
      });
      await request(app.getHttpServer())
        .post('/api/templates')
        .attach('file', docx, {
          filename: 'template.docx',
          contentType: 'application/octet-stream',
        })
        .field('metadata', badMeta)
        .expect(400);
    });

    it('422: not-docx.txt → FILE_CORRUPTED', async () => {
      const txt = loadFixture('not-docx.txt');
      await request(app.getHttpServer())
        .post('/api/templates')
        .attach('file', txt, { filename: 'template.docx', contentType: 'application/octet-stream' })
        .field('metadata', VALID_META)
        .expect(422);
    });

    it('413: file over MAX_FILE_SIZE', async () => {
      const big = Buffer.alloc(21 * 1024 * 1024); // 21 MB
      await request(app.getHttpServer())
        .post('/api/templates')
        .attach('file', big, { filename: 'big.docx', contentType: 'application/octet-stream' })
        .field('metadata', VALID_META)
        .expect(413);
    });
  });

  // -----------------------------------------------------------------------
  // Shared: upload one template for subsequent tests
  // -----------------------------------------------------------------------

  let createdId: string;

  beforeAll(async () => {
    // Wait for app — noop; will be seeded in first real describe block
  });

  async function seedOne(): Promise<string> {
    const docx = loadFixture('valid.docx');
    const res = await request(app.getHttpServer())
      .post('/api/templates')
      .attach('file', docx, { filename: 'template.docx', contentType: 'application/octet-stream' })
      .field('metadata', VALID_META)
      .expect(201);
    return res.body.id as string;
  }

  // -----------------------------------------------------------------------
  // GET /api/templates
  // -----------------------------------------------------------------------

  describe('GET /api/templates', () => {
    it('returns array', async () => {
      const res = await request(app.getHttpServer()).get('/api/templates').expect(200);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it('filters by q param', async () => {
      await seedOne();
      const res = await request(app.getHttpServer()).get('/api/templates?q=E2E').expect(200);
      expect(res.body.every((t: { name: string }) => t.name.toLowerCase().includes('e2e'))).toBe(
        true,
      );
    });
  });

  // -----------------------------------------------------------------------
  // GET /api/templates/:id
  // -----------------------------------------------------------------------

  describe('GET /api/templates/:id', () => {
    it('200: returns metadata for existing template', async () => {
      createdId = await seedOne();
      const res = await request(app.getHttpServer()).get(`/api/templates/${createdId}`).expect(200);
      expect(res.body.id).toBe(createdId);
    });

    it('404: unknown id', async () => {
      await request(app.getHttpServer()).get('/api/templates/no-such-id').expect(404);
    });
  });

  // -----------------------------------------------------------------------
  // GET /api/templates/:id/file
  // -----------------------------------------------------------------------

  describe('GET /api/templates/:id/file', () => {
    it('returns DOCX with correct Content-Type', async () => {
      const res = await request(app.getHttpServer())
        .get(`/api/templates/${createdId}/file`)
        .expect(200);
      expect(res.headers['content-type']).toContain(
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      );
      expect(res.headers['content-disposition']).toContain('.docx');
    });
  });

  // -----------------------------------------------------------------------
  // GET /api/templates/:id/metadata
  // -----------------------------------------------------------------------

  describe('GET /api/templates/:id/metadata', () => {
    it('returns metadata.json with content-disposition', async () => {
      const res = await request(app.getHttpServer())
        .get(`/api/templates/${createdId}/metadata`)
        .expect(200);
      expect(res.headers['content-disposition']).toContain('metadata.json');
    });
  });

  // -----------------------------------------------------------------------
  // GET /api/templates/:id/bundle
  // -----------------------------------------------------------------------

  describe('GET /api/templates/:id/bundle', () => {
    it('returns ZIP containing template.docx and metadata.json', async () => {
      const res = await request(app.getHttpServer())
        .get(`/api/templates/${createdId}/bundle`)
        .buffer(true)
        .parse((res, callback) => {
          const chunks: Buffer[] = [];
          res.on('data', (chunk: Buffer) => chunks.push(chunk));
          res.on('end', () => callback(null, Buffer.concat(chunks)));
        })
        .expect(200);
      expect(res.headers['content-type']).toContain('application/zip');
      // ZIP magic bytes PK
      const buf = res.body as Buffer;
      expect(buf[0]).toBe(0x50); // P
      expect(buf[1]).toBe(0x4b); // K
    });
  });

  // -----------------------------------------------------------------------
  // PUT /api/templates/:id/metadata
  // -----------------------------------------------------------------------

  describe('PUT /api/templates/:id/metadata', () => {
    it('200: updates name', async () => {
      const res = await request(app.getHttpServer())
        .put(`/api/templates/${createdId}/metadata`)
        .send({
          name: 'Updated Name',
          description: 'Updated desc',
          placeholders: [
            { name: 'fullName', type: 'string', label: 'Full Name', required: true },
            { name: 'date', type: 'date', label: 'Date', required: true },
            { name: 'amount', type: 'number', label: 'Amount', required: true },
          ],
        })
        .expect(200);
      expect(res.body.name).toBe('Updated Name');
    });
  });

  // -----------------------------------------------------------------------
  // POST /api/templates/validate
  // -----------------------------------------------------------------------

  describe('POST /api/templates/validate', () => {
    it('returns validation result without persisting', async () => {
      const docx = loadFixture('valid.docx');
      const countBefore = (await request(app.getHttpServer()).get('/api/templates').expect(200))
        .body.length;

      await request(app.getHttpServer())
        .post('/api/templates/validate')
        .attach('file', docx, {
          filename: 'template.docx',
          contentType: 'application/octet-stream',
        })
        .field('metadata', VALID_META)
        .expect(200);

      const countAfter = (await request(app.getHttpServer()).get('/api/templates').expect(200)).body
        .length;
      expect(countAfter).toBe(countBefore); // nothing persisted
    });

    it('accepts docAITemplate.docx when metadata declares key1 and key2', async () => {
      const docx = loadFixture('docAITemplate.docx');
      const metadata = JSON.stringify({
        name: 'DocAI Template',
        description: 'Template with 2 placeholders',
        placeholders: [
          { name: 'key1', type: 'string', label: 'Key 1', required: true },
          { name: 'key2', type: 'string', label: 'Key 2', required: true },
        ],
      });

      const res = await request(app.getHttpServer())
        .post('/api/templates/validate')
        .attach('file', docx, {
          filename: 'docAITemplate.docx',
          contentType: 'application/octet-stream',
        })
        .field('metadata', metadata)
        .expect(200);

      expect(res.body.errors).toEqual([]);
    });

    it('returns errors for mismatched metadata', async () => {
      const docx = loadFixture('valid.docx');
      const res = await request(app.getHttpServer())
        .post('/api/templates/validate')
        .attach('file', docx, {
          filename: 'template.docx',
          contentType: 'application/octet-stream',
        })
        .field('metadata', JSON.stringify({ name: 'X', description: 'Y', placeholders: [] }))
        .expect(200);
      expect(res.body.errors.length).toBeGreaterThan(0);
    });
  });

  // -----------------------------------------------------------------------
  // DELETE /api/templates/:id
  // -----------------------------------------------------------------------

  describe('DELETE /api/templates/:id', () => {
    it('204: deletes existing template', async () => {
      const id = await seedOne();
      await request(app.getHttpServer()).delete(`/api/templates/${id}`).expect(204);
    });

    it('404: deleting again returns 404', async () => {
      const id = await seedOne();
      await request(app.getHttpServer()).delete(`/api/templates/${id}`).expect(204);
      await request(app.getHttpServer()).delete(`/api/templates/${id}`).expect(404);
    });
  });
});
