import { mkdtemp, writeFile, rm, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { ErrorCode } from '../common/constants/error-codes';
import { ServiceException } from '../common/exceptions/service.exception';

import { FileStorageService } from './file-storage.service';

describe('FileStorageService', () => {
  let storageRoot: string;
  let service: FileStorageService;

  beforeEach(async () => {
    storageRoot = await mkdtemp(join(tmpdir(), 'fss-test-'));
    service = new FileStorageService(storageRoot);
  });

  afterEach(async () => {
    await rm(storageRoot, { recursive: true, force: true });
  });

  // --- save ---

  it('save() creates a file at the given relative path', async () => {
    await service.save('tpl-1/template.docx', Buffer.from('hello'));
    expect(await service.exists('tpl-1/template.docx')).toBe(true);
  });

  it('save() creates intermediate directories recursively', async () => {
    await service.save('deep/nested/dir/file.txt', Buffer.from('data'));
    expect(await service.exists('deep/nested/dir/file.txt')).toBe(true);
  });

  it('save() writes correct content', async () => {
    const content = Buffer.from('test-content');
    await service.save('tpl-1/template.docx', content);
    const result = await service.read('tpl-1/template.docx');
    expect(result.equals(content)).toBe(true);
  });

  it('save() is atomic — no tmp file left on success', async () => {
    await service.save('tpl-1/file.bin', Buffer.from('abc'));
    const files = await service.listFiles('tpl-1');
    expect(files.filter((f) => f.endsWith('.tmp'))).toHaveLength(0);
  });

  // --- read ---

  it('read() returns file buffer', async () => {
    const buf = Buffer.from('read-test');
    await service.save('tpl-2/f.bin', buf);
    const result = await service.read('tpl-2/f.bin');
    expect(result.equals(buf)).toBe(true);
  });

  it('read() throws STORAGE_READ_ERROR when file does not exist', async () => {
    await expect(service.read('nonexistent/file.docx')).rejects.toMatchObject({
      code: ErrorCode.STORAGE_READ_ERROR,
    });
    await expect(service.read('nonexistent/file.docx')).rejects.toBeInstanceOf(ServiceException);
  });

  // --- delete ---

  it('delete() removes a file', async () => {
    await service.save('tpl-3/f.txt', Buffer.from('x'));
    await service.delete('tpl-3/f.txt');
    expect(await service.exists('tpl-3/f.txt')).toBe(false);
  });

  it('delete() removes a directory recursively', async () => {
    await service.save('tpl-4/template.docx', Buffer.from('x'));
    await service.save('tpl-4/metadata.json', Buffer.from('{}'));
    await service.delete('tpl-4');
    expect(await service.exists('tpl-4')).toBe(false);
  });

  it('delete() throws STORAGE_DELETE_ERROR when path does not exist', async () => {
    await expect(service.delete('ghost/dir')).rejects.toMatchObject({
      code: ErrorCode.STORAGE_DELETE_ERROR,
    });
  });

  // --- exists ---

  it('exists() returns true for existing file', async () => {
    await service.save('tpl-5/f', Buffer.from(''));
    expect(await service.exists('tpl-5/f')).toBe(true);
  });

  it('exists() returns false for missing path', async () => {
    expect(await service.exists('no-such-file')).toBe(false);
  });

  // --- getSize ---

  it('getSize() returns correct byte count', async () => {
    const buf = Buffer.alloc(256, 0xff);
    await service.save('tpl-6/f', buf);
    expect(await service.getSize('tpl-6/f')).toBe(256);
  });

  // --- listDirs ---

  it('listDirs() returns sub-directories', async () => {
    await service.save('dir-a/file', Buffer.from(''));
    await service.save('dir-b/file', Buffer.from(''));
    const dirs = await service.listDirs('.');
    expect(dirs).toContain('dir-a');
    expect(dirs).toContain('dir-b');
  });

  it('listDirs() returns empty array for empty folder', async () => {
    expect(await service.listDirs('.')).toEqual([]);
  });

  // --- checksum ---

  it('checksum() returns sha256 hex string of correct length', async () => {
    await service.save('tpl-7/f', Buffer.from('hello'));
    const sum = await service.checksum('tpl-7/f');
    expect(sum).toMatch(/^[0-9a-f]{64}$/);
  });

  it('checksum() is deterministic for same content', async () => {
    const buf = Buffer.from('deterministic');
    await service.save('tpl-8/a', buf);
    await service.save('tpl-8/b', buf);
    expect(await service.checksum('tpl-8/a')).toBe(await service.checksum('tpl-8/b'));
  });
});
