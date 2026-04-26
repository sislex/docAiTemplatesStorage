import { resolve } from 'node:path';

import { Module } from '@nestjs/common';

import { HealthController } from './health.controller';
import { HealthService } from './health.service';

@Module({
  controllers: [HealthController],
  providers: [
    {
      provide: HealthService,
      useFactory: () => {
        const storagePath = resolve(process.env['STORAGE_ROOT'] ?? './storage/templates');
        return new HealthService(storagePath);
      },
    },
  ],
  exports: [HealthService],
})
export class HealthModule {}
