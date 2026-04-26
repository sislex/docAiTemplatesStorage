import type { ApiWarning } from './api.types';
import type { TemplateMetadata } from './template.types';

export interface UploadResponse {
  id: string;
  metadata: TemplateMetadata;
}

export interface ValidateResponse {
  valid: boolean;
  placeholders: string[];
  warnings: ApiWarning[];
}
