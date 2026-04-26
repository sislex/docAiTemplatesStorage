import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { DiagnosticsService, DiagnosticsResult } from './diagnostics.service';

@ApiTags('diagnostics')
@Controller('diagnostics')
export class DiagnosticsController {
  constructor(private readonly diagnosticsService: DiagnosticsService) {}

  @Get()
  @ApiOperation({ summary: 'Диагностика хранилища' })
  async getDiagnostics(): Promise<DiagnosticsResult> {
    return this.diagnosticsService.getDiagnostics();
  }
}
