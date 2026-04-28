import { Module } from '@nestjs/common';

import { DocxParserService } from '../docx/docx-parser.service';
import { FileStorageService } from '../storage/file-storage.service';
import { StorageModule } from '../storage/storage.module';

import { TemplateValidationService } from './template-validation.service';
import { TemplateRepository } from './template.repository';
import { TemplatesController } from './templates.controller';
import { TemplatesService } from './templates.service';

@Module({
  imports: [StorageModule],
  controllers: [TemplatesController],
  providers: [
    DocxParserService,
    TemplateValidationService,
    {
      provide: TemplateRepository,
      useFactory: (storage: FileStorageService) =>
        new TemplateRepository(storage, new DocxParserService(), new TemplateValidationService()),
      inject: [FileStorageService],
    },
    {
      provide: TemplatesService,
      useFactory: (repo: TemplateRepository) => {
        const maxFileSize = parseInt(process.env['MAX_FILE_SIZE'] ?? '20971520', 10);
        return new TemplatesService(
          repo,
          new DocxParserService(),
          new TemplateValidationService(),
          maxFileSize,
        );
      },
      inject: [TemplateRepository],
    },
  ],
  exports: [TemplatesService],
})
export class TemplatesModule {}
