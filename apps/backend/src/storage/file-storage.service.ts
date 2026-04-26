import { createHash } from 'node:crypto';
import {
  access,
  constants,
  mkdir,
  readdir,
  readFile,
  rename,
  rm,
  stat,
  writeFile,
} from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

import { Injectable } from '@nestjs/common';

import { ErrorCode } from '../common/constants/error-codes';
import { ServiceException } from '../common/exceptions/service.exception';

@Injectable()
export class FileStorageService {
  constructor(private readonly storageRoot: string) {}

  /** Resolves a relative path against storageRoot. */
  private abs(relPath: string): string {
    return resolve(join(this.storageRoot, relPath));
  }

  /**
   * Atomically writes buffer to relPath (mkdir -p + write to .tmp + rename).
   */
  async save(relPath: string, buffer: Buffer): Promise<void> {
    const target = this.abs(relPath);
    const tmp = `${target}.${process.pid}.tmp`;
    try {
      await mkdir(dirname(target), { recursive: true });
      await writeFile(tmp, buffer);
      await rename(tmp, target);
    } catch (err) {
      // Best-effort cleanup of tmp file on failure
      await rm(tmp, { force: true });
      throw new ServiceException(ErrorCode.STORAGE_WRITE_ERROR, {
        retryable: true,
        action: 'retry',
        explain: (err as NodeJS.ErrnoException).message,
      });
    }
  }

  /** Reads file at relPath and returns its Buffer. */
  async read(relPath: string): Promise<Buffer> {
    try {
      return await readFile(this.abs(relPath));
    } catch (err) {
      throw new ServiceException(ErrorCode.STORAGE_READ_ERROR, {
        retryable: false,
        action: 'fatal',
        explain: (err as NodeJS.ErrnoException).message,
      });
    }
  }

  /** Removes a file or directory (recursive) at relPath. */
  async delete(relPath: string): Promise<void> {
    const target = this.abs(relPath);
    const ok = await this.exists(relPath);
    if (!ok) {
      throw new ServiceException(ErrorCode.STORAGE_DELETE_ERROR, {
        retryable: false,
        action: 'fatal',
        explain: `Path does not exist: ${relPath}`,
      });
    }
    try {
      await rm(target, { recursive: true, force: false });
    } catch (err) {
      throw new ServiceException(ErrorCode.STORAGE_DELETE_ERROR, {
        retryable: true,
        action: 'retry',
        explain: (err as NodeJS.ErrnoException).message,
      });
    }
  }

  /** Returns true if the path exists. */
  async exists(relPath: string): Promise<boolean> {
    try {
      await access(this.abs(relPath), constants.F_OK);
      return true;
    } catch {
      return false;
    }
  }

  /** Returns size in bytes of a file. */
  async getSize(relPath: string): Promise<number> {
    const s = await stat(this.abs(relPath));
    return s.size;
  }

  /**
   * Lists direct subdirectory names inside relPath.
   * Pass '.' to list top-level template dirs.
   */
  async listDirs(relPath: string): Promise<string[]> {
    try {
      const entries = await readdir(this.abs(relPath), { withFileTypes: true });
      return entries.filter((e) => e.isDirectory()).map((e) => e.name);
    } catch {
      return [];
    }
  }

  /** Lists file names (non-directories) directly inside relPath. */
  async listFiles(relPath: string): Promise<string[]> {
    try {
      const entries = await readdir(this.abs(relPath), { withFileTypes: true });
      return entries.filter((e) => e.isFile()).map((e) => e.name);
    } catch {
      return [];
    }
  }

  /** Returns SHA-256 hex checksum of a file. */
  async checksum(relPath: string): Promise<string> {
    const buf = await this.read(relPath);
    return createHash('sha256').update(buf).digest('hex');
  }
}
