import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Global API prefix — excludes health, diagnostics, ai endpoints
  app.setGlobalPrefix('api', {
    exclude: ['/health', '/diagnostics', '/ai'],
  });

  // CORS — origins from env, comma-separated
  const rawOrigins = process.env['CORS_ORIGINS'] ?? 'http://localhost:4200,http://localhost:5173';
  const corsOrigins = rawOrigins.split(',').map((o) => o.trim());
  app.enableCors({ origin: corsOrigins, credentials: true });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('templateStorage API')
    .setDescription('REST API для управления DOCX-шаблонами')
    .setVersion('1.0')
    .addTag('templates', 'Управление шаблонами')
    .addTag('health', 'Проверка работоспособности')
    .addTag('diagnostics', 'Диагностика')
    .addTag('ai', 'AI-манифест')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  const port = parseInt(process.env['PORT'] ?? '4000', 10);
  await app.listen(port);
  console.log(`Backend running on http://localhost:${port}`);
  console.log(`Swagger docs: http://localhost:${port}/api-docs`);
}

void bootstrap();
