import { Module } from '@nestjs/common';

import { AiModule } from './ai/ai.module';
import { DiagnosticsModule } from './diagnostics/diagnostics.module';
import { HealthModule } from './health/health.module';
import { TemplatesModule } from './templates/templates.module';

@Module({
  imports: [HealthModule, DiagnosticsModule, TemplatesModule, AiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
