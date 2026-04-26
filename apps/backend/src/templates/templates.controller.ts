import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  UploadedFile,
  UseInterceptors,
  Res,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes, ApiBody, ApiProduces } from '@nestjs/swagger';
import type { TemplateMetadata } from '@templateStorage/shared-types';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import type { Response } from 'express';
import { memoryStorage } from 'multer';

import { CreateTemplateDto } from './dto/create-template.dto';
import type { ListTemplatesQueryDto } from './dto/list-templates-query.dto';
import type { UpdateMetadataDto } from './dto/update-metadata.dto';
import type { TemplatesService } from './templates.service';

const MAX_FILE_SIZE = parseInt(process.env['MAX_FILE_SIZE'] ?? '20971520', 10);

@ApiTags('templates')
@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @Get()
  @ApiOperation({ summary: 'Список шаблонов' })
  list(@Query() query: ListTemplatesQueryDto) {
    return this.templatesService.list(query.q ? { q: query.q } : {});
  }

  // NOTE: 'validate' must be declared before bare @Post() to take routing priority
  @HttpCode(HttpStatus.OK)
  @Post('validate')
  @ApiOperation({ summary: 'Валидация шаблона (без сохранения)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' }, metadata: { type: 'string' } },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', { storage: memoryStorage(), limits: { fileSize: MAX_FILE_SIZE } }),
  )
  async validateDryRun(
    @UploadedFile() file: Express.Multer.File,
    @Body('metadata') metadataRaw: string,
  ) {
    if (!file) throw new BadRequestException('File is required');
    const metadata = await this.parseAndValidateDto(CreateTemplateDto, metadataRaw);
    const fullMeta = this.buildMetadata(metadata);
    return this.templatesService.validateDryRun(file.buffer, fullMeta);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Загрузить новый шаблон' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' }, metadata: { type: 'string' } },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', { storage: memoryStorage(), limits: { fileSize: MAX_FILE_SIZE } }),
  )
  async upload(@UploadedFile() file: Express.Multer.File, @Body('metadata') metadataRaw: string) {
    if (!file) throw new BadRequestException('File is required');
    const metadata = await this.parseAndValidateDto(CreateTemplateDto, metadataRaw);
    const fullMeta = this.buildMetadata(metadata);
    return this.templatesService.upload(file.buffer, fullMeta);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Метаданные шаблона' })
  get(@Param('id') id: string) {
    return this.templatesService.get(id);
  }

  @Get(':id/file')
  @ApiOperation({ summary: 'Скачать DOCX-файл шаблона' })
  @ApiProduces('application/vnd.openxmlformats-officedocument.wordprocessingml.document')
  async getFile(@Param('id') id: string, @Res() res: Response) {
    const buf = await this.templatesService.getFile(id);
    res
      .set(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      )
      .set('Content-Disposition', `attachment; filename="${id}.docx"`)
      .send(buf);
  }

  @Get(':id/metadata')
  @ApiOperation({ summary: 'Скачать metadata.json шаблона' })
  async getMetadata(@Param('id') id: string, @Res() res: Response) {
    const buf = await this.templatesService.getMetadataFile(id);
    res
      .set('Content-Type', 'application/json')
      .set('Content-Disposition', `attachment; filename="${id}-metadata.json"`)
      .send(buf);
  }

  @Get(':id/bundle')
  @ApiOperation({ summary: 'Скачать ZIP-архив (template.docx + metadata.json)' })
  @ApiProduces('application/zip')
  async getBundle(@Param('id') id: string, @Res() res: Response) {
    const buf = await this.templatesService.getBundle(id);
    res
      .set('Content-Type', 'application/zip')
      .set('Content-Disposition', `attachment; filename="${id}-bundle.zip"`)
      .send(buf);
  }

  @Put(':id/metadata')
  @ApiOperation({ summary: 'Обновить метаданные шаблона' })
  async updateMetadata(@Param('id') id: string, @Body() dto: UpdateMetadataDto) {
    const existing = await this.templatesService.get(id);
    const updated: TemplateMetadata = { ...existing, ...dto };
    return this.templatesService.updateMetadata(id, updated);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Удалить шаблон' })
  async remove(@Param('id') id: string) {
    await this.templatesService.remove(id);
  }

  // --- helpers ---

  private buildMetadata(dto: CreateTemplateDto): TemplateMetadata {
    const now = new Date().toISOString();
    return {
      id: '',
      name: dto.name,
      description: dto.description,
      placeholders: dto.placeholders,
      createdAt: now,
      updatedAt: now,
    };
  }

  private async parseAndValidateDto<T extends object>(
    DtoClass: new () => T,
    raw: string,
  ): Promise<T> {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      throw new BadRequestException('metadata must be a valid JSON string');
    }
    const instance = plainToInstance(DtoClass, parsed);
    const errors = await validate(instance as object);
    if (errors.length > 0) {
      const messages = errors.flatMap((e) => Object.values(e.constraints ?? {}));
      throw new BadRequestException(messages.join('; '));
    }
    return instance;
  }
}
