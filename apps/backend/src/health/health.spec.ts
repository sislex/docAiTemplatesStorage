import { Test } from '@nestjs/testing';

import { HealthController } from './health.controller';
import { HealthService } from './health.service';

describe('HealthController', () => {
  let controller: HealthController;
  let service: HealthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthService,
          useValue: {
            check: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get(HealthController);
    service = module.get(HealthService);
  });

  it('returns health check result', async () => {
    const result = {
      status: 'ok' as const,
      storage: 'ok' as const,
      timestamp: '2026-04-17T00:00:00.000Z',
    };
    (service.check as jest.Mock).mockResolvedValue(result);

    expect(await controller.check()).toEqual(result);
  });
});

describe('HealthService', () => {
  it('returns status ok when storage is accessible', async () => {
    const service = new HealthService('/tmp');
    const result = await service.check();

    expect(result.status).toBe('ok');
    expect(result.storage).toBe('ok');
    expect(result.timestamp).toBeTruthy();
  });

  it('returns storage error when path is inaccessible', async () => {
    const service = new HealthService('/nonexistent/path/xyz_999');
    const result = await service.check();

    expect(result.status).toBe('ok');
    expect(result.storage).toBe('error');
  });
});
