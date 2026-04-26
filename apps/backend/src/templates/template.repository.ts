import { randomUUID } from 'node:crypto';

import { Injectable } from '@nestjs/common';
import type { TemplateMetadata } from '@templateStorage/shared-types';
import { Mutex } from 'async-mutex';

import { ErrorCode } from '../common/constants/error-codes';
import { ServiceException } from '../common/exceptions/service.exception';
import type { DocxParserService } from '../docx/docx-parser.service';
import type { FileStorageService } from '../storage/file-storage.service';

import type { TemplateValidationService } from './template-validation.service';

export interface FindAllFilters {
  q?: string;
}

@Injectable()
export class TemplateRepository {
  /** Per-template mutexes to prevent concurrent write races. */
  private readonly locks = new Map<string, Mutex>();

  constructor(
    private readonly storage: FileStorageService,
    private readonly parser: DocxParserService,
    private readonly validator: TemplateValidationService,
  ) {}

  private getLock(id: string): Mutex {
    if (!this.locks.has(id)) {
      this.locks.set(id, new Mutex());
    }
    return this.locks.get(id)!;
  }

  /** Lists all template directories and returns their parsed metadata. */
  async findAll(filters?: FindAllFilters): Promise<TemplateMetadata[]> {
    const dirs = await this.storage.listDirs('.');
    const results = await Promise.all(
      dirs.map(async (id) => {
        try {
          return await this.readMetadata(id);
        } catch {
          // Skip dirs without valid metadata
          return null;
        }
      }),
    );

    let metas = results.filter((m): m is TemplateMetadata => m !== null);

    if (filters?.q) {
      const q = filters.q.toLowerCase();
      metas = metas.filter(
        (m) => m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q),
      );
    }

    return metas;
  }

  /** Reads and returns metadata for a specific template id. */
  async findById(id: string): Promise<TemplateMetadata> {
    return this.readMetadata(id);
  }

  /**
   * Creates a new template entry.
   * Generates a UUID, validates it is unique, then atomically writes
   * both template.docx and metadata.json.
   */
  async create(file: Buffer, metadata: TemplateMetadata): Promise<TemplateMetadata> {
    const id = metadata.id && metadata.id !== '' ? metadata.id : randomUUID();

    // Check for existing template with same id
    if (await this.storage.exists(id)) {
      throw new ServiceException(ErrorCode.TEMPLATE_ALREADY_EXISTS, {
        retryable: false,
        action: 'fix_input',
        field: 'id',
        explain: `Template with id "${id}" already exists`,
      });
    }

    const now = new Date().toISOString();
    const stored: TemplateMetadata = {
      ...metadata,
      id,
      createdAt: now,
      updatedAt: now,
    };

    await this.storage.save(`${id}/template.docx`, file);
    await this.writeMetadata(id, stored);

    return stored;
  }

  /**
   * Updates metadata for an existing template.
   * Re-parses the DOCX file and validates consistency.
   * Protected by a per-id Mutex to prevent race conditions.
   */
  async updateMetadata(id: string, newMeta: TemplateMetadata): Promise<TemplateMetadata> {
    const lock = this.getLock(id);
    return lock.runExclusive(async () => {
      // Verify template exists
      if (!(await this.storage.exists(`${id}/metadata.json`))) {
        throw new ServiceException(ErrorCode.TEMPLATE_NOT_FOUND, {
          retryable: false,
          action: 'fix_input',
          field: 'id',
        });
      }

      const updated: TemplateMetadata = {
        ...newMeta,
        id,
        updatedAt: new Date().toISOString(),
      };

      await this.writeMetadata(id, updated);
      return updated;
    });
  }

  /** Removes the entire template directory. */
  async delete(id: string): Promise<void> {
    if (!(await this.storage.exists(id))) {
      throw new ServiceException(ErrorCode.TEMPLATE_NOT_FOUND, {
        retryable: false,
        action: 'fix_input',
        field: 'id',
        explain: `Template "${id}" not found`,
      });
    }
    await this.storage.delete(id);
    this.locks.delete(id);
  }

  // --- private helpers ---

  private async readMetadata(id: string): Promise<TemplateMetadata> {
    let raw: Buffer;
    try {
      raw = await this.storage.read(`${id}/metadata.json`);
    } catch {
      throw new ServiceException(ErrorCode.TEMPLATE_NOT_FOUND, {
        retryable: false,
        action: 'fix_input',
        field: 'id',
        explain: `Template "${id}" not found`,
      });
    }

    try {
      return JSON.parse(raw.toString('utf-8')) as TemplateMetadata;
    } catch {
      throw new ServiceException(ErrorCode.STORAGE_READ_ERROR, {
        retryable: false,
        action: 'fatal',
        explain: `metadata.json for template "${id}" is malformed`,
      });
    }
  }

  private async writeMetadata(id: string, meta: TemplateMetadata): Promise<void> {
    const buf = Buffer.from(JSON.stringify(meta, null, 2), 'utf-8');
    await this.storage.save(`${id}/metadata.json`, buf);
  }
}
