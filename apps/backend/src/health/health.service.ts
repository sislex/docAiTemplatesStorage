import { access, constants, writeFile, unlink } from 'node:fs/promises';
import { join } from 'node:path';

import { Injectable } from '@nestjs/common';

export interface HealthCheckResult {
  status: 'ok';
  storage: 'ok' | 'error';
  timestamp: string;
}

@Injectable()
export class HealthService {
  constructor(private readonly storagePath: string) {}

  async check(): Promise<HealthCheckResult> {
    const storage = await this.checkStorage();
    return {
      status: 'ok',
      storage,
      timestamp: new Date().toISOString(),
    };
  }

  private async checkStorage(): Promise<'ok' | 'error'> {
    try {
      await access(this.storagePath, constants.R_OK | constants.W_OK);
      // Write + delete a probe file to verify rw access
      const probe = join(this.storagePath, `.health-probe-${Date.now()}`);
      await writeFile(probe, '');
      await unlink(probe);
      return 'ok';
    } catch {
      return 'error';
    }
  }
}
