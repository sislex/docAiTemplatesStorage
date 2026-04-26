import { Test } from '@nestjs/testing';

import { TemplatesController } from './templates.controller';
import { TemplatesService } from './templates.service';

describe('TemplatesController', () => {
  let controller: TemplatesController;
  let service: { list: jest.Mock };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TemplatesController],
      providers: [
        {
          provide: TemplatesService,
          useValue: {
            list: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    controller = module.get(TemplatesController);
    service = module.get(TemplatesService);
  });

  it('passes empty filters when q is not provided', async () => {
    await controller.list({});

    expect(service.list).toHaveBeenCalledWith({});
  });

  it('passes q filter when q is provided', async () => {
    await controller.list({ q: 'invoice' });

    expect(service.list).toHaveBeenCalledWith({ q: 'invoice' });
  });
});
