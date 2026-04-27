import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AiService, AiChatResult } from './ai.service';
import { AiChatDto } from './dto/ai-chat.dto';

const BASE_URL = 'http://localhost:4000';
const MAX_FILE_SIZE = parseInt(process.env['MAX_FILE_SIZE'] ?? '20971520', 10);

@ApiTags('ai')
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get('manifest')
  @ApiOperation({ summary: 'AI-манифест: все операции API' })
  getManifest() {
    return {
      name: 'templateStorage',
      version: '1.0.0',
      operations: [
        {
          name: 'listTemplates',
          method: 'GET',
          path: '/api/templates',
          inputs: ['q?'],
          outputs: ['TemplateMetadata[]'],
        },
        {
          name: 'getTemplate',
          method: 'GET',
          path: '/api/templates/:id',
          inputs: ['id'],
          outputs: ['TemplateMetadata'],
        },
        {
          name: 'uploadTemplate',
          method: 'POST',
          path: '/api/templates',
          inputs: ['file (DOCX)', 'metadata (JSON)'],
          outputs: ['TemplateMetadata'],
        },
        {
          name: 'validateTemplate',
          method: 'POST',
          path: '/api/templates/validate',
          inputs: ['file (DOCX)', 'metadata (JSON)'],
          outputs: ['ValidationResult'],
        },
        {
          name: 'downloadFile',
          method: 'GET',
          path: '/api/templates/:id/file',
          inputs: ['id'],
          outputs: ['DOCX Buffer'],
        },
        {
          name: 'downloadMetadata',
          method: 'GET',
          path: '/api/templates/:id/metadata',
          inputs: ['id'],
          outputs: ['JSON Buffer'],
        },
        {
          name: 'downloadBundle',
          method: 'GET',
          path: '/api/templates/:id/bundle',
          inputs: ['id'],
          outputs: ['ZIP Buffer'],
        },
        {
          name: 'updateMetadata',
          method: 'PUT',
          path: '/api/templates/:id/metadata',
          inputs: ['id', 'UpdateMetadataDto'],
          outputs: ['TemplateMetadata'],
        },
        {
          name: 'deleteTemplate',
          method: 'DELETE',
          path: '/api/templates/:id',
          inputs: ['id'],
          outputs: ['204 No Content'],
        },
      ],
    };
  }

  @Get('capabilities')
  @ApiOperation({ summary: 'AI-возможности сервиса' })
  getCapabilities() {
    return {
      keyTypes: ['string', 'number', 'date', 'boolean'],
      maxFileSizeBytes: MAX_FILE_SIZE,
      placeholderSyntax: '${name}',
      keyNameRegex: '^[a-zA-Z_][a-zA-Z0-9_]*$',
    };
  }

  @Get('examples')
  @ApiOperation({ summary: 'cURL-примеры для всех операций' })
  getExamples() {
    return [
      {
        operation: 'listTemplates',
        curl: `curl -X GET "${BASE_URL}/api/templates"`,
      },
      {
        operation: 'getTemplate',
        curl: `curl -X GET "${BASE_URL}/api/templates/{id}"`,
      },
      {
        operation: 'uploadTemplate',
        curl: `curl -X POST "${BASE_URL}/api/templates" -F "file=@template.docx" -F 'metadata={"name":"My Template","description":"Desc","placeholders":[{"name":"field","type":"string","label":"Field","required":true}]}'`,
      },
      {
        operation: 'validateTemplate',
        curl: `curl -X POST "${BASE_URL}/api/templates/validate" -F "file=@template.docx" -F 'metadata={"name":"My Template","description":"Desc","placeholders":[]}'`,
      },
      {
        operation: 'downloadFile',
        curl: `curl -X GET "${BASE_URL}/api/templates/{id}/file" --output template.docx`,
      },
      {
        operation: 'downloadMetadata',
        curl: `curl -X GET "${BASE_URL}/api/templates/{id}/metadata" --output metadata.json`,
      },
      {
        operation: 'downloadBundle',
        curl: `curl -X GET "${BASE_URL}/api/templates/{id}/bundle" --output bundle.zip`,
      },
      {
        operation: 'updateMetadata',
        curl: `curl -X PUT "${BASE_URL}/api/templates/{id}/metadata" -H "Content-Type: application/json" -d '{"name":"New Name","description":"New Desc","placeholders":[]}'`,
      },
      {
        operation: 'deleteTemplate',
        curl: `curl -X DELETE "${BASE_URL}/api/templates/{id}"`,
      },
      {
        operation: 'chat',
        curl: `curl -X POST "${BASE_URL}/ai/chat" -H "Content-Type: application/json" -d '{"message":"Привет","model":"gpt-4o-mini"}'`,
      },
    ];
  }

  @Post('chat')
  @ApiOperation({ summary: 'Отправить вопрос AI ассистенту' })
  chat(@Body() body: AiChatDto): Promise<AiChatResult> {
    return this.aiService.chat(body);
  }
}
