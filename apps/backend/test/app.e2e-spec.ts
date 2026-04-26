import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../src/app.module';
import { HttpExceptionFilter } from '../src/common/filters/http-exception.filter';

describe('Health & Diagnostics (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /health', () => {
    it('returns status ok', () => {
      return request(app.getHttpServer())
        .get('/health')
        .expect(200)
        .expect((res) => {
          expect(res.body.status).toBe('ok');
          expect(res.body.storage).toBeDefined();
          expect(res.body.timestamp).toBeTruthy();
        });
    });
  });

  describe('GET /diagnostics', () => {
    it('returns diagnostics info', () => {
      return request(app.getHttpServer())
        .get('/diagnostics')
        .expect(200)
        .expect((res) => {
          expect(typeof res.body.templatesCount).toBe('number');
          expect(typeof res.body.totalSizeBytes).toBe('number');
          expect(typeof res.body.storagePath).toBe('string');
        });
    });
  });

  describe('GET /api/nonexistent', () => {
    it('returns unified error JSON', () => {
      return request(app.getHttpServer())
        .get('/api/nonexistent')
        .expect(404)
        .expect((res) => {
          expect(res.body.code).toBeDefined();
          expect(res.body.action).toBeDefined();
          expect(typeof res.body.retryable).toBe('boolean');
        });
    });
  });

  describe('AI endpoints', () => {
    it('GET /ai/manifest returns operations array', () => {
      return request(app.getHttpServer())
        .get('/ai/manifest')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body.operations)).toBe(true);
          expect(res.body.operations.length).toBeGreaterThan(0);
        });
    });

    it('GET /ai/capabilities returns keyTypes', () => {
      return request(app.getHttpServer())
        .get('/ai/capabilities')
        .expect(200)
        .expect((res) => {
          expect(res.body.keyTypes).toContain('string');
          expect(typeof res.body.maxFileSizeBytes).toBe('number');
        });
    });

    it('GET /ai/examples returns array of curl examples', () => {
      return request(app.getHttpServer())
        .get('/ai/examples')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toBeGreaterThan(0);
          expect(res.body[0].curl).toBeTruthy();
        });
    });
  });
});
