import {
  FieldType,
  PlaceholderSyntax,
  type ExternalTemplateMetadata,
  type TemplateField,
} from '../components/types';

import { API_PREFIX } from './config';
import { requestJson } from './http';

interface BackendTemplateKey {
  name: string;
  type: 'string' | 'number' | 'date' | 'boolean';
  label: string;
  required: boolean;
  defaultValue?: string;
}

interface BackendTemplateMetadata {
  id: string;
  name: string;
  description: string;
  placeholders: BackendTemplateKey[];
  createdAt: string;
  updatedAt: string;
}

interface ValidateResult {
  errors: Array<{ code: string; message: string; field?: string }>;
  warnings: Array<{ code: string; message: string }>;
}

interface UploadInput {
  name: string;
  description: string;
  fields: TemplateField[];
}

function mapFieldType(type: BackendTemplateKey['type']): FieldType {
  if (type === 'number') return FieldType.NUMBER;
  if (type === 'date') return FieldType.DATE;
  if (type === 'boolean') return FieldType.BOOLEAN;
  return FieldType.STRING;
}

function normalizeFieldType(type: FieldType): BackendTemplateKey['type'] {
  if (type === FieldType.NUMBER || type === FieldType.CURRENCY) return 'number';
  if (type === FieldType.DATE) return 'date';
  if (type === FieldType.BOOLEAN) return 'boolean';
  return 'string';
}

function mapPlaceholderToField(key: BackendTemplateKey): TemplateField {
  return {
    key: key.name,
    label: key.label,
    type: mapFieldType(key.type),
    required: key.required,
    defaultValue: key.defaultValue,
  };
}

function mapToExternalTemplate(meta: BackendTemplateMetadata): ExternalTemplateMetadata {
  return {
    id: meta.id,
    name: meta.name,
    description: meta.description,
    version: '1.0.0',
    format: 'docx',
    downloadUrl: `${API_PREFIX}/templates/${meta.id}/file`,
    createdAt: meta.createdAt,
    updatedAt: meta.updatedAt,
    tags: [],
    schema: {
      templateId: meta.id,
      templateName: meta.name,
      version: '1.0.0',
      placeholderSyntax: PlaceholderSyntax.DOLLAR_CURLY,
      totalPlaceholders: meta.placeholders.length,
      fields: meta.placeholders.map(mapPlaceholderToField),
    },
  };
}

function buildMetadataPayload(input: UploadInput): string {
  const placeholders = input.fields.map((field) => ({
    name: field.key,
    type: normalizeFieldType(field.type),
    label: field.label ?? field.key,
    required: field.required,
    ...(typeof field.defaultValue === 'string' ? { defaultValue: field.defaultValue } : {}),
  }));

  return JSON.stringify({
    name: input.name,
    description: input.description,
    placeholders,
  });
}

export async function fetchTemplates(q?: string): Promise<ExternalTemplateMetadata[]> {
  const query = q ? `?q=${encodeURIComponent(q)}` : '';
  const result = await requestJson<BackendTemplateMetadata[]>(`/templates${query}`);
  return result.map(mapToExternalTemplate);
}

export async function fetchTemplateById(id: string): Promise<ExternalTemplateMetadata> {
  const result = await requestJson<BackendTemplateMetadata>(`/templates/${id}`);
  return mapToExternalTemplate(result);
}

export async function deleteTemplateById(id: string): Promise<void> {
  await requestJson<void>(`/templates/${id}`, { method: 'DELETE' });
}

export async function updateTemplateMetadata(
  template: ExternalTemplateMetadata,
): Promise<ExternalTemplateMetadata> {
  const payload = {
    name: template.name,
    description: template.description ?? '',
    placeholders: (template.schema?.fields ?? []).map((field) => ({
      name: field.key,
      type: normalizeFieldType(field.type),
      label: field.label ?? field.key,
      required: field.required,
      ...(typeof field.defaultValue === 'string' ? { defaultValue: field.defaultValue } : {}),
    })),
  };

  const result = await requestJson<BackendTemplateMetadata>(`/templates/${template.id}/metadata`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return mapToExternalTemplate(result);
}

export async function uploadTemplate(
  file: File,
  input: UploadInput,
): Promise<ExternalTemplateMetadata> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('metadata', buildMetadataPayload(input));

  const result = await requestJson<BackendTemplateMetadata>('/templates', {
    method: 'POST',
    body: formData,
  });

  return mapToExternalTemplate(result);
}

export async function validateTemplate(file: File, input: UploadInput): Promise<ValidateResult> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('metadata', buildMetadataPayload(input));

  return requestJson<ValidateResult>('/templates/validate', {
    method: 'POST',
    body: formData,
  });
}

/**
 * Extracts placeholder keys from a DOCX by running backend validation with empty metadata.
 * Backend reports document-only keys as UNDECLARED_KEY_IN_DOCUMENT errors.
 */
export async function extractTemplateKeys(file: File): Promise<string[]> {
  const result = await validateTemplate(file, {
    name: 'Schema analysis',
    description: 'Temporary metadata for key extraction',
    fields: [],
  });

  const keys = result.errors
    .filter((e) => e.code === 'UNDECLARED_KEY_IN_DOCUMENT' && typeof e.field === 'string')
    .map((e) => e.field as string);

  return Array.from(new Set(keys));
}
