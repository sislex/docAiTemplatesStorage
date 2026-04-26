import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { HealthService, HealthCheckResult } from './health.service';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOperation({ summary: 'Проверка работоспособности' })
  async check(): Promise<HealthCheckResult> {
    return this.healthService.check();
  }
}
