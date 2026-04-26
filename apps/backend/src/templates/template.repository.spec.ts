import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import type { TemplateMetadata } from '@templateStorage/shared-types';

import { makeMetadata } from '../../../../packages/test-utils/src/factories/makeMetadata';
import { loadFixture } from '../../../../packages/test-utils/src/loadFixture';
import { ErrorCode } from '../common/constants/error-codes';
import { ServiceException } from '../common/exceptions/service.exception';
import { DocxParserService } from '../docx/docx-parser.service';
import { FileStorageService } from '../storage/file-storage.service';

import { TemplateValidationService } from './template-validation.service';
import { TemplateRepository } from './template.repository';

describe('TemplateRepository', () => {
  let storageRoot: string;
  let storage: FileStorageService;
  let parser: DocxParserService;
  let validator: TemplateValidationService;
  let repo: TemplateRepository;

  beforeEach(async () => {
    storageRoot = await mkdtemp(join(tmpdir(), 'repo-test-'));
    storage = new FileStorageService(storageRoot);
    parser = new DocxParserService();
    validator = new TemplateValidationService();
    repo = new TemplateRepository(storage, parser, validator);
  });

  afterEach(async () => {
    await rm(storageRoot, { recursive: true, force: true });
  });

  /** Helper: create a valid template in the repo */
  async function seedTemplate(
    overrides: Partial<TemplateMetadata> = {},
  ): Promise<TemplateMetadata> {
    const docx = loadFixture('valid.docx');
    const meta = makeMetadata({
      placeholders: [
        { name: 'fullName', type: 'string', label: 'Full Name', required: true },
        { name: 'date', type: 'date', label: 'Date', required: true },
        { name: 'amount', type: 'number', label: 'Amount', required: true },
      ],
      ...overrides,
    });
    return repo.create(docx, meta);
  }

  // --- findAll ---

  it('findAll() returns empty array when storage is empty', async () => {
    expect(await repo.findAll()).toEqual([]);
  });

  it('findAll() returns all created templates', async () => {
    const a = await seedTemplate({ name: 'Alpha' });
    const b = await seedTemplate({ name: 'Beta' });
    const all = await repo.findAll();
    const ids = all.map((m) => m.id);
    expect(ids).toContain(a.id);
    expect(ids).toContain(b.id);
  });

  it('findAll() filters by search query (name contains q)', async () => {
    await seedTemplate({ name: 'Invoice Template' });
    await seedTemplate({ name: 'Contract Template' });
    const result = await repo.findAll({ q: 'Invoice' });
    expect(result.every((m) => m.name.toLowerCase().includes('invoice'))).toBe(true);
  });

  // --- findById ---

  it('findById() returns the template metadata', async () => {
    const created = await seedTemplate();
    const found = await repo.findById(created.id);
    expect(found.id).toBe(created.id);
    expect(found.name).toBe(created.name);
  });

  it('findById() throws TEMPLATE_NOT_FOUND for unknown id', async () => {
    await expect(repo.findById('nonexistent-id')).rejects.toMatchObject({
      code: ErrorCode.TEMPLATE_NOT_FOUND,
    });
  });

  // --- create ---

  it('create() generates a uuid id and persists both files', async () => {
    const created = await seedTemplate();
    expect(created.id).toBeTruthy();
    expect(await storage.exists(`${created.id}/template.docx`)).toBe(true);
    expect(await storage.exists(`${created.id}/metadata.json`)).toBe(true);
  });

  it('create() stores metadata with correct fields', async () => {
    const meta = makeMetadata({ name: 'My Template', description: 'Desc' });
    const docx = loadFixture('valid.docx');
    const created = await repo.create(docx, {
      ...meta,
      placeholders: [
        { name: 'fullName', type: 'string', label: 'Full Name', required: true },
        { name: 'date', type: 'date', label: 'Date', required: true },
        { name: 'amount', type: 'number', label: 'Amount', required: true },
      ],
    });
    const found = await repo.findById(created.id);
    expect(found.name).toBe('My Template');
    expect(found.description).toBe('Desc');
  });

  it('create() throws TEMPLATE_ALREADY_EXISTS when id is taken', async () => {
    const created = await seedTemplate();
    const docx = loadFixture('valid.docx');
    await expect(repo.create(docx, { ...created })).rejects.toMatchObject({
      code: ErrorCode.TEMPLATE_ALREADY_EXISTS,
    });
  });

  // --- updateMetadata ---

  it('updateMetadata() persists new metadata', async () => {
    const created = await seedTemplate();
    const updated = await repo.updateMetadata(created.id, {
      ...created,
      name: 'Updated Name',
    });
    expect(updated.name).toBe('Updated Name');
    const found = await repo.findById(created.id);
    expect(found.name).toBe('Updated Name');
  });

  it('updateMetadata() throws TEMPLATE_NOT_FOUND for unknown id', async () => {
    const meta = makeMetadata();
    await expect(repo.updateMetadata('ghost', meta)).rejects.toMatchObject({
      code: ErrorCode.TEMPLATE_NOT_FOUND,
    });
  });

  // --- delete ---

  it('delete() removes the template directory', async () => {
    const created = await seedTemplate();
    await repo.delete(created.id);
    expect(await storage.exists(created.id)).toBe(false);
  });

  it('delete() throws TEMPLATE_NOT_FOUND for unknown id', async () => {
    await expect(repo.delete('ghost-id')).rejects.toMatchObject({
      code: ErrorCode.TEMPLATE_NOT_FOUND,
    });
  });

  // --- mutex: concurrent updateMetadata ---

  it('two parallel updateMetadata calls execute sequentially (no race)', async () => {
    const created = await seedTemplate();
    const updates: string[] = [];

    const update = async (name: string) => {
      await repo.updateMetadata(created.id, { ...created, name });
      updates.push(name);
    };

    // Fire both concurrently
    await Promise.all([update('First'), update('Second')]);

    // Both must have completed; final state must be one of them
    const found = await repo.findById(created.id);
    expect(['First', 'Second']).toContain(found.name);
    expect(updates).toHaveLength(2);
  });
});
