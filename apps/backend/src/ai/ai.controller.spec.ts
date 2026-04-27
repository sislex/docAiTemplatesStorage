import { Test } from '@nestjs/testing';

import { AiController } from './ai.controller';
import { AiService } from './ai.service';

describe('AiController', () => {
  it('POST /ai/chat delegates to AiService', async () => {
    const aiService = {
      chat: jest.fn(async () => ({ model: 'gpt-4o-mini', answer: 'Привет!' })),
    };

    const moduleRef = await Test.createTestingModule({
      controllers: [AiController],
      providers: [{ provide: AiService, useValue: aiService }],
    }).compile();

    const controller = moduleRef.get(AiController);
    const result = await controller.chat({
      message: 'привет',
      model: 'gpt-4o-mini',
      skill: 'template_storage_app_support',
      history: [{ role: 'assistant', content: 'Здравствуйте!' }],
    });

    expect(aiService.chat).toHaveBeenCalledWith({
      message: 'привет',
      model: 'gpt-4o-mini',
      skill: 'template_storage_app_support',
      history: [{ role: 'assistant', content: 'Здравствуйте!' }],
    });
    expect(result).toEqual({ model: 'gpt-4o-mini', answer: 'Привет!' });
  });
});
