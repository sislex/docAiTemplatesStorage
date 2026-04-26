// Shared TypeScript types for DocAI Templates Library

export enum FieldType {
  STRING = 'string',
  NUMBER = 'number',
  DATE = 'date',
  BOOLEAN = 'boolean',
  ARRAY = 'array',
  OBJECT = 'object',
  ENUM = 'enum',
  EMAIL = 'email',
  PHONE = 'phone',
  URL = 'url',
  CURRENCY = 'currency',
}

export enum PlaceholderSyntax {
  DOUBLE_CURLY = 'double_curly',
  DOLLAR_CURLY = 'dollar_curly',
  PERCENT = 'percent',
  CUSTOM = 'custom',
}

export interface TemplateField {
  key: string;
  label?: string;
  type: FieldType;
  required: boolean;
  defaultValue?: unknown;
  description?: string;
  format?: string;
  pattern?: string;
  enumValues?: string[];
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  example?: unknown;
}

export interface TemplateSchema {
  templateId?: string;
  templateName?: string;
  version?: string;
  fields: TemplateField[];
  placeholderSyntax: PlaceholderSyntax;
  totalPlaceholders: number;
  metadata?: Record<string, unknown>;
}

export interface DiagnosticInfo {
  parseTimeMs: number;
  totalPlaceholders: number;
  uniquePlaceholders: number;
  duplicatePlaceholders: string[];
  undocumentedKeys: string[];
  syntaxIssues: string[];
}

export interface WarningInfo {
  code: string;
  message: string;
  field?: string;
  details?: unknown;
}

export interface TemplateAnalysisResponse {
  schema: TemplateSchema;
  warnings: WarningInfo[];
  diagnostics: DiagnosticInfo;
}

export interface ExternalTemplateMetadata {
  id: string;
  name: string;
  description?: string;
  version: string;
  format: string;
  downloadUrl: string;
  schema?: TemplateSchema;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiErrorResponseDto {
  code: string;
  message: string;
  field?: string;
  retryable: boolean;
  action: 'retry' | 'ask_user' | 'fix_input' | 'fatal';
  explain?: string;
  details?: unknown;
}

export type Theme = 'auto' | 'light' | 'dark';
export type Language = 'ru' | 'en';
