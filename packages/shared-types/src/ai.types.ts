export interface AiExample {
  input: Record<string, string>;
  outputDescription: string;
}

export interface AiCapabilities {
  supportsGenerate: boolean;
  supportsValidate: boolean;
}

export interface AiManifest {
  name: string;
  version: string;
  capabilities: AiCapabilities;
  examples: AiExample[];
}
