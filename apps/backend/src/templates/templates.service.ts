import { Injectable } from '@nestjs/common';
import type { TemplateMetadata } from '@templateStorage/shared-types';
import AdmZip from 'adm-zip';

import { ErrorCode } from '../common/constants/error-codes';
import { ServiceException } from '../common/exceptions/service.exception';
import type { DocxParserService } from '../docx/docx-parser.service';

import type { TemplateValidationService, ValidationResult } from './template-validation.service';
import type { TemplateRepository, FindAllFilters } from './template.repository';

const DEFAULT_MAX = 20 * 1024 * 1024; // 20 MB

@Injectable()
export class TemplatesService {
  constructor(
    private readonly repo: TemplateRepository,
    private readonly parser: DocxParserService,
    private readonly validator: TemplateValidationService,
    private readonly maxFileSize: number = DEFAULT_MAX,
  ) {}

  /** Returns all templates, optionally filtered. */
  async list(filters: FindAllFilters): Promise<TemplateMetadata[]> {
    return this.repo.findAll(filters);
  }

  /** Returns metadata for a single template. */
  async get(id: string): Promise<TemplateMetadata> {
    return this.repo.findById(id);
  }

  /**
   * Uploads a new DOCX template.
   * Validates file size, parses placeholders, validates metadata consistency,
   * then persists via repository.
   */
  async upload(file: Buffer, metadata: TemplateMetadata): Promise<TemplateMetadata> {
    this.checkSize(file);
    const { keys, occurrences } = this.parser.parse(file); // throws FILE_CORRUPTED if invalid
    this.assertValidation(
      this.validator.validate({
        metadata: { keys: metadata.placeholders },
        extractedKeys: keys,
        occurrences,
      }),
    );
    return this.repo.create(file, metadata);
  }

  /**
   * Dry-run validation — parses and validates without persisting anything.
   */
  async validateDryRun(file: Buffer, metadata: TemplateMetadata): Promise<ValidationResult> {
    this.checkSize(file);
    const { keys, occurrences } = this.parser.parse(file);
    return this.validator.validate({
      metadata: { keys: metadata.placeholders },
      extractedKeys: keys,
      occurrences,
    });
  }

  /** Returns the raw DOCX file buffer for a template. */
  async getFile(id: string): Promise<Buffer> {
    await this.repo.findById(id); // ensures existence
    try {
      return await this.repo['storage'].read(`${id}/template.docx`);
    } catch {
      throw new ServiceException(ErrorCode.STORAGE_READ_ERROR, {
        retryable: false,
        action: 'fatal',
        explain: `Cannot read template.docx for id "${id}"`,
      });
    }
  }

  /** Returns the raw metadata.json buffer for a template. */
  async getMetadataFile(id: string): Promise<Buffer> {
    await this.repo.findById(id);
    try {
      return await this.repo['storage'].read(`${id}/metadata.json`);
    } catch {
      throw new ServiceException(ErrorCode.STORAGE_READ_ERROR, {
        retryable: false,
        action: 'fatal',
        explain: `Cannot read metadata.json for id "${id}"`,
      });
    }
  }

  /** Packages template.docx + metadata.json into a ZIP buffer. */
  async getBundle(id: string): Promise<Buffer> {
    const [docx, metaBuf] = await Promise.all([this.getFile(id), this.getMetadataFile(id)]);
    const zip = new AdmZip();
    zip.addFile('template.docx', docx);
    zip.addFile('metadata.json', metaBuf);
    return zip.toBuffer();
  }

  /** Updates metadata for an existing template. */
  async updateMetadata(id: string, newMeta: TemplateMetadata): Promise<TemplateMetadata> {
    return this.repo.updateMetadata(id, newMeta);
  }

  /** Deletes a template entirely. */
  async remove(id: string): Promise<void> {
    return this.repo.delete(id);
  }

  // --- helpers ---

  private checkSize(file: Buffer): void {
    if (file.length > this.maxFileSize) {
      throw new ServiceException(ErrorCode.FILE_TOO_LARGE, {
        retryable: false,
        action: 'fix_input',
        explain: `File size ${file.length} exceeds limit of ${this.maxFileSize} bytes`,
      });
    }
  }

  private assertValidation(result: ValidationResult): void {
    if (result.errors.length > 0) {
      throw new ServiceException(ErrorCode.VALIDATION_ERROR, {
        retryable: false,
        action: 'fix_input',
        explain: result.errors.map((e) => e.message).join('; '),
      });
    }
  }
}
