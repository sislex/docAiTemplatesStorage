import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;
  let openSpy: jest.Mock;

  beforeEach(() => {
    openSpy = jest.fn();
    TestBed.configureTestingModule({
      providers: [ToastService, { provide: MatSnackBar, useValue: { open: openSpy } }],
    });
    service = TestBed.inject(ToastService);
  });

  it('success() opens MatSnackBar with success panel class', () => {
    service.success('Готово');
    expect(openSpy).toHaveBeenCalledWith(
      'Готово',
      'OK',
      expect.objectContaining({
        panelClass: ['toast-success'],
      }),
    );
  });

  it('error() uses error panel class and longer duration', () => {
    service.error('Упс');
    const [, , cfg] = openSpy.mock.calls[0];
    expect(cfg.panelClass).toEqual(['toast-error']);
    expect(cfg.duration).toBe(6000);
  });

  it('warning() uses warning panel class', () => {
    service.warning('Внимание');
    expect(openSpy).toHaveBeenCalledWith(
      'Внимание',
      'OK',
      expect.objectContaining({
        panelClass: ['toast-warning'],
      }),
    );
  });

  it('info() uses info panel class', () => {
    service.info('Инфо');
    expect(openSpy).toHaveBeenCalledWith(
      'Инфо',
      'OK',
      expect.objectContaining({
        panelClass: ['toast-info'],
      }),
    );
  });
});
