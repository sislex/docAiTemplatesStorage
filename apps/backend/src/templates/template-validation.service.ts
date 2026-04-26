import { Injectable } from '@nestjs/common';
import type { ApiError, ApiWarning, TemplateKey } from '@templateStorage/shared-types';
import { isKeyType, isValidKeyName } from '@templateStorage/shared-types';

export interface ValidationInput {
  metadata: { keys: TemplateKey[] };
  extractedKeys: string[];
  occurrences?: Record<string, number>;
}

export interface ValidationResult {
  errors: ApiError[];
  warnings: ApiWarning[];
}

@Injectable()
export class TemplateValidationService {
  validate({ metadata, extractedKeys, occurrences = {} }: ValidationInput): ValidationResult {
    const errors: ApiError[] = [];
    const warnings: ApiWarning[] = [];

    const metaNames = metadata.keys.map((k) => k.name);
    const extractedSet = new Set(extractedKeys);
    const metaSet = new Set(metaNames);

    // 1. INVALID_KEY_NAME — name must match ^[a-zA-Z_][a-zA-Z0-9_]*$
    for (const k of metadata.keys) {
      if (!isValidKeyName(k.name)) {
        errors.push({
          code: 'INVALID_KEY_NAME',
          message: `Key name "${k.name}" is invalid. Must match ^[a-zA-Z_][a-zA-Z0-9_]*$`,
          field: k.name,
          retryable: false,
          action: 'fix_input',
        });
      }
    }

    // 2. DUPLICATE_KEY_IN_METADATA — duplicate names inside metadata
    const seen = new Set<string>();
    for (const k of metadata.keys) {
      if (seen.has(k.name)) {
        errors.push({
          code: 'DUPLICATE_KEY_IN_METADATA',
          message: `Duplicate key name in metadata: "${k.name}"`,
          field: k.name,
          retryable: false,
          action: 'fix_input',
        });
      }
      seen.add(k.name);
    }

    // 3. INVALID_KEY_TYPE — type must be a valid KeyType
    for (const k of metadata.keys) {
      if (!isKeyType(k.type)) {
        errors.push({
          code: 'INVALID_KEY_TYPE',
          message: `Key "${k.name}" has invalid type "${k.type as string}"`,
          field: k.name,
          retryable: false,
          action: 'fix_input',
        });
      }
    }

    // 4. NO_PLACEHOLDERS_FOUND — extractedKeys is empty
    if (extractedKeys.length === 0) {
      errors.push({
        code: 'NO_PLACEHOLDERS_FOUND',
        message: 'No placeholders found in the DOCX document',
        retryable: false,
        action: 'fix_input',
      });
    }

    // 5. MISSING_KEY_IN_TEMPLATE — declared in metadata but absent in DOCX
    for (const name of metaNames) {
      if (!extractedSet.has(name)) {
        errors.push({
          code: 'MISSING_KEY_IN_TEMPLATE',
          message: `Key "${name}" is declared in metadata but not found in the document`,
          field: name,
          retryable: false,
          action: 'fix_input',
        });
      }
    }

    // 6. UNDECLARED_KEY_IN_DOCUMENT — in DOCX but not in metadata
    for (const name of extractedKeys) {
      if (!metaSet.has(name)) {
        errors.push({
          code: 'UNDECLARED_KEY_IN_DOCUMENT',
          message: `Key "${name}" is found in the document but not declared in metadata`,
          field: name,
          retryable: false,
          action: 'fix_input',
        });
      }
    }

    // 7. DUPLICATE_KEY_IN_DOCUMENT (warning) — key appears more than once in DOCX
    for (const [name, count] of Object.entries(occurrences)) {
      if (count > 1) {
        warnings.push({
          code: 'DUPLICATE_KEY_IN_DOCUMENT',
          message: `Placeholder "\${${name}}" appears ${count} times in the document`,
        });
      }
    }

    return { errors, warnings };
  }
}
