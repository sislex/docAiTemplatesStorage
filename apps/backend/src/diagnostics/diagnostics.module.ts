import { resolve } from 'node:path';

import { Module } from '@nestjs/common';

import { DiagnosticsController } from './diagnostics.controller';
import { DiagnosticsService } from './diagnostics.service';

@Module({
  controllers: [DiagnosticsController],
  providers: [
    {
      provide: DiagnosticsService,
      useFactory: () => {
        const storagePath = resolve(process.env['STORAGE_ROOT'] ?? './storage/templates');
        return new DiagnosticsService(storagePath);
      },
    },
  ],
})
export class DiagnosticsModule {}
