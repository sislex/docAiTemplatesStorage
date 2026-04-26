import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

import { Injectable } from '@nestjs/common';

export interface DiagnosticsResult {
  templatesCount: number;
  totalSizeBytes: number;
  storagePath: string;
}

@Injectable()
export class DiagnosticsService {
  constructor(private readonly storagePath: string) {}

  async getDiagnostics(): Promise<DiagnosticsResult> {
    let templatesCount = 0;
    let totalSizeBytes = 0;

    try {
      const entries = await readdir(this.storagePath, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const dirPath = join(this.storagePath, entry.name);
        const files = await readdir(dirPath);
        let hasDocx = false;
        let hasMetadata = false;
        let dirSize = 0;

        for (const file of files) {
          const fileStat = await stat(join(dirPath, file));
          dirSize += fileStat.size;
          if (file === 'template.docx') hasDocx = true;
          if (file === 'metadata.json') hasMetadata = true;
        }

        if (hasDocx && hasMetadata) {
          templatesCount++;
          totalSizeBytes += dirSize;
        }
      }
    } catch {
      // Storage dir might not exist yet
    }

    return {
      templatesCount,
      totalSizeBytes,
      storagePath: this.storagePath,
    };
  }
}
