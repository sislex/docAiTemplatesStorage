import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'ts-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="spinner-wrapper" [class.spinner-wrapper--overlay]="overlay">
      <mat-progress-spinner [diameter]="diameter" [mode]="'indeterminate'"></mat-progress-spinner>
      <p *ngIf="label" class="spinner-label">{{ label }}</p>
    </div>
  `,
  styles: [
    `
      .spinner-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 16px;
      }
      .spinner-wrapper--overlay {
        position: fixed;
        inset: 0;
        background: rgba(255, 255, 255, 0.7);
        justify-content: center;
        z-index: 9999;
      }
      .spinner-label {
        color: #555;
        font-size: 14px;
        margin: 0;
      }
    `,
  ],
})
export class SpinnerComponent {
  @Input() diameter = 40;
  @Input() label?: string;
  @Input() overlay = false;
}
