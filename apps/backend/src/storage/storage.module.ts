import { resolve } from 'node:path';

import { Module } from '@nestjs/common';

import { FileStorageService } from './file-storage.service';

@Module({
  providers: [
    {
      provide: FileStorageService,
      useFactory: () => {
        const storagePath = resolve(process.env['STORAGE_ROOT'] ?? './storage/templates');
        return new FileStorageService(storagePath);
      },
    },
  ],
  exports: [FileStorageService],
})
export class StorageModule {}
