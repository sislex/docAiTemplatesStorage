import type { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

import { AiService } from '../src/ai/ai.service';
import { AppModule } from '../src/app.module';
import { ErrorCode } from '../src/common/constants/error-codes';
import { ServiceException } from '../src/common/exceptions/service.exception';
import { HttpExceptionFilter } from '../src/common/filters/http-exception.filter';

describe('AI Chat API (e2e)', () => {
  let app: INestApplication;
  const aiService = {
    chat: jest.fn(),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
      .overrideProvider(AiService)
      .useValue(aiService)
      .compile();

    app = moduleRef.createNestApplication();
    app.setGlobalPrefix('api', { exclude: ['/health', '/diagnostics', '/ai'] });
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }),
    );
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.init();
  });

  afterEach(() => {
    aiService.chat.mockReset();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /api/ai/chat', () => {
    it('200: returns assistant answer for valid payload', async () => {
      aiService.chat.mockResolvedValue({ model: 'gpt-4o-mini', answer: 'Привет! Чем помочь?' });

      const res = await request(app.getHttpServer())
        .post('/api/ai/chat')
        .send({
          message: 'привет',
          model: 'gpt-4o-mini',
          skill: 'template_storage_app_support',
          history: [{ role: 'assistant', content: 'Здравствуйте! Чем помочь?' }],
        })
        .expect(201);

      expect(aiService.chat).toHaveBeenCalledWith({
        message: 'привет',
        model: 'gpt-4o-mini',
        skill: 'template_storage_app_support',
        history: [{ role: 'assistant', content: 'Здравствуйте! Чем помочь?' }],
      });
      expect(res.body).toEqual({ model: 'gpt-4o-mini', answer: 'Привет! Чем помочь?' });
    });

    it('400: rejects request without message', async () => {
      await request(app.getHttpServer())
        .post('/api/ai/chat')
        .send({ model: 'gpt-4o-mini' })
        .expect(400);
      expect(aiService.chat).not.toHaveBeenCalled();
    });

    it('400: rejects history item with unsupported role', async () => {
      await request(app.getHttpServer())
        .post('/api/ai/chat')
        .send({
          message: 'привет',
          history: [{ role: 'system', content: 'bad role from client' }],
        })
        .expect(400);

      expect(aiService.chat).not.toHaveBeenCalled();
    });

    it('500: returns unified API error when service fails', async () => {
      aiService.chat.mockRejectedValue(
        new ServiceException(ErrorCode.GENERATE_FAILED, {
          retryable: false,
          action: 'ask_user',
          explain: 'Copilot request failed with status 401',
        }),
      );

      const res = await request(app.getHttpServer())
        .post('/api/ai/chat')
        .send({ message: 'привет' })
        .expect(500);

      expect(res.body).toMatchObject({
        code: ErrorCode.GENERATE_FAILED,
        message: ErrorCode.GENERATE_FAILED,
        retryable: false,
        action: 'ask_user',
        explain: 'Copilot request failed with status 401',
      });
    });
  });
});
