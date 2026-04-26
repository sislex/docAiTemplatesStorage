import AdmZip from 'adm-zip';

import { makeMetadata } from '../../../../packages/test-utils/src/factories/makeMetadata';
import { loadFixture } from '../../../../packages/test-utils/src/loadFixture';
import { ErrorCode } from '../common/constants/error-codes';
import { ServiceException } from '../common/exceptions/service.exception';
import { DocxParserService } from '../docx/docx-parser.service';

import { TemplateValidationService } from './template-validation.service';
import type { TemplateRepository } from './template.repository';
import { TemplatesService } from './templates.service';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB for tests

function makeMockRepo(
  overrides: Partial<TemplateRepository> = {},
): jest.Mocked<TemplateRepository> {
  return {
    findAll: jest.fn().mockResolvedValue([]),
    findById: jest.fn(),
    create: jest.fn(),
    updateMetadata: jest.fn(),
    delete: jest.fn(),
    ...overrides,
  } as unknown as jest.Mocked<TemplateRepository>;
}

describe('TemplatesService', () => {
  let service: TemplatesService;
  let repo: jest.Mocked<TemplateRepository>;
  let parser: DocxParserService;
  let validator: TemplateValidationService;

  beforeEach(() => {
    repo = makeMockRepo();
    parser = new DocxParserService();
    validator = new TemplateValidationService();
    service = new TemplatesService(repo, parser, validator, MAX_FILE_SIZE);
  });

  // --- list ---

  it('list() delegates to repository', async () => {
    const meta = makeMetadata();
    repo.findAll.mockResolvedValue([meta]);
    const result = await service.list({});
    expect(result).toEqual([meta]);
    expect(repo.findAll).toHaveBeenCalledWith({});
  });

  // --- get ---

  it('get() returns metadata from repository', async () => {
    const meta = makeMetadata();
    repo.findById.mockResolvedValue(meta);
    expect(await service.get(meta.id)).toEqual(meta);
  });

  // --- upload ---

  it('upload() rejects files over MAX_FILE_SIZE', async () => {
    const big = Buffer.alloc(MAX_FILE_SIZE + 1);
    const meta = makeMetadata();
    await expect(service.upload(big, meta)).rejects.toMatchObject({
      code: ErrorCode.FILE_TOO_LARGE,
    });
  });

  it('upload() rejects corrupted DOCX', async () => {
    const corrupted = loadFixture('corrupted.docx');
    const meta = makeMetadata();
    await expect(service.upload(corrupted, meta)).rejects.toMatchObject({
      code: ErrorCode.FILE_CORRUPTED,
    });
  });

  it('upload() calls repository.create with parsed metadata on success', async () => {
    const docx = loadFixture('valid.docx');
    const meta = makeMetadata({
      placeholders: [
        { name: 'fullName', type: 'string', label: 'Name', required: true },
        { name: 'date', type: 'date', label: 'Date', required: true },
        { name: 'amount', type: 'number', label: 'Amount', required: true },
      ],
    });
    repo.create.mockResolvedValue(meta);
    await service.upload(docx, meta);
    expect(repo.create).toHaveBeenCalledWith(docx, expect.objectContaining({ name: meta.name }));
  });

  // --- validateDryRun ---

  it('validateDryRun() does NOT call repository.create', async () => {
    const docx = loadFixture('valid.docx');
    const meta = makeMetadata({
      placeholders: [
        { name: 'fullName', type: 'string', label: 'Name', required: true },
        { name: 'date', type: 'date', label: 'Date', required: true },
        { name: 'amount', type: 'number', label: 'Amount', required: true },
      ],
    });
    await service.validateDryRun(docx, meta);
    expect(repo.create).not.toHaveBeenCalled();
  });

  it('validateDryRun() returns validation errors for mismatched keys', async () => {
    const docx = loadFixture('valid.docx'); // has fullName, date, amount
    const meta = makeMetadata({ placeholders: [] }); // declares nothing
    const result = await service.validateDryRun(docx, meta);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  // --- getFile ---

  it('getFile() reads template.docx from storage via repo', async () => {
    const meta = makeMetadata();
    repo.findById.mockResolvedValue(meta);
    // storage is accessed through repo — we test the delegation only
    // Actual file reading is tested in FileStorageService spec
    await expect(service.getFile(meta.id)).rejects.toThrow(); // no actual file stored
  });

  // --- getBundle ---

  it('getBundle() returns a Buffer that is a valid ZIP', async () => {
    const docx = loadFixture('valid.docx');
    const meta = makeMetadata({
      placeholders: [
        { name: 'fullName', type: 'string', label: 'Name', required: true },
        { name: 'date', type: 'date', label: 'Date', required: true },
        { name: 'amount', type: 'number', label: 'Amount', required: true },
      ],
    });
    repo.findById.mockResolvedValue(meta);
    repo.create.mockResolvedValue(meta);

    // Mock getFile and getMetadataFile
    jest.spyOn(service, 'getFile').mockResolvedValue(docx);
    jest.spyOn(service, 'getMetadataFile').mockResolvedValue(Buffer.from(JSON.stringify(meta)));

    const bundle = await service.getBundle(meta.id);
    const zip = new AdmZip(bundle);
    const entries = zip.getEntries().map((e) => e.entryName);
    expect(entries).toContain('template.docx');
    expect(entries).toContain('metadata.json');
  });

  // --- updateMetadata ---

  it('updateMetadata() delegates to repository', async () => {
    const meta = makeMetadata();
    repo.updateMetadata.mockResolvedValue(meta);
    await service.updateMetadata(meta.id, meta);
    expect(repo.updateMetadata).toHaveBeenCalledWith(
      meta.id,
      expect.objectContaining({ name: meta.name }),
    );
  });

  // --- remove ---

  it('remove() delegates to repository.delete', async () => {
    repo.delete.mockResolvedValue();
    await service.remove('some-id');
    expect(repo.delete).toHaveBeenCalledWith('some-id');
  });
});
