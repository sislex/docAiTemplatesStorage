import { Test } from '@nestjs/testing';

import { DiagnosticsController } from './diagnostics.controller';
import { DiagnosticsService } from './diagnostics.service';

describe('DiagnosticsController', () => {
  let controller: DiagnosticsController;
  let service: DiagnosticsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [DiagnosticsController],
      providers: [
        {
          provide: DiagnosticsService,
          useValue: {
            getDiagnostics: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get(DiagnosticsController);
    service = module.get(DiagnosticsService);
  });

  it('returns diagnostics result', async () => {
    const result = {
      templatesCount: 3,
      totalSizeBytes: 1024,
      storagePath: '/storage/templates',
    };
    (service.getDiagnostics as jest.Mock).mockResolvedValue(result);

    expect(await controller.getDiagnostics()).toEqual(result);
  });
});

describe('DiagnosticsService', () => {
  it('returns zero counts for empty directory', async () => {
    const fs = await import('node:fs/promises');
    const tmp = await fs.mkdtemp('/tmp/diag-');
    const service = new DiagnosticsService(tmp);
    const result = await service.getDiagnostics();

    expect(result.templatesCount).toBe(0);
    expect(result.totalSizeBytes).toBe(0);
    expect(result.storagePath).toBe(tmp);

    await fs.rm(tmp, { recursive: true });
  });

  it('counts templates and size correctly', async () => {
    const fs = await import('node:fs/promises');
    const path = await import('node:path');
    const tmp = await fs.mkdtemp('/tmp/diag-');

    // Create a fake template dir with two files
    const tplDir = path.join(tmp, 'test-tpl');
    await fs.mkdir(tplDir);
    await fs.writeFile(path.join(tplDir, 'template.docx'), Buffer.alloc(512));
    await fs.writeFile(path.join(tplDir, 'metadata.json'), '{}');

    const service = new DiagnosticsService(tmp);
    const result = await service.getDiagnostics();

    expect(result.templatesCount).toBe(1);
    expect(result.totalSizeBytes).toBeGreaterThanOrEqual(512);
    expect(result.storagePath).toBe(tmp);

    await fs.rm(tmp, { recursive: true });
  });
});
