import { Injectable, inject } from '@angular/core';
import type { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

export type ToastKind = 'success' | 'error' | 'warning' | 'info';

const DEFAULT_DURATION: Record<ToastKind, number> = {
  success: 3000,
  info: 3000,
  warning: 5000,
  error: 6000,
};

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly snackBar = inject(MatSnackBar);

  success(message: string, action = 'OK'): void {
    this.show(message, action, 'success');
  }
  error(message: string, action = 'OK'): void {
    this.show(message, action, 'error');
  }
  warning(message: string, action = 'OK'): void {
    this.show(message, action, 'warning');
  }
  info(message: string, action = 'OK'): void {
    this.show(message, action, 'info');
  }

  private show(message: string, action: string, kind: ToastKind): void {
    const config: MatSnackBarConfig = {
      duration: DEFAULT_DURATION[kind],
      panelClass: [`toast-${kind}`],
    };
    this.snackBar.open(message, action, config);
  }
}
