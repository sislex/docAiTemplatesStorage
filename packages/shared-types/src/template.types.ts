export type KeyType = 'string' | 'number' | 'date' | 'boolean';

export interface TemplateKey {
  name: string;
  type: KeyType;
  label: string;
  required: boolean;
  defaultValue?: string;
}

export interface TemplateMetadata {
  id: string;
  name: string;
  description: string;
  placeholders: TemplateKey[];
  createdAt: string;
  updatedAt: string;
}

export interface TemplateSummary {
  id: string;
  name: string;
  description: string;
  placeholderCount: number;
  createdAt: string;
  updatedAt: string;
}
