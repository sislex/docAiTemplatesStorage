import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ts-template-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card class="tpl-card">
      <mat-card-header>
        <mat-card-title>{{ name }}</mat-card-title>
        <mat-card-subtitle *ngIf="category">{{ category }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p *ngIf="description">{{ description }}</p>
        <p class="keys-count">Плейсхолдеров: {{ keysCount }}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="open.emit()">Открыть</button>
        <button mat-button (click)="download.emit()">Скачать</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      .tpl-card {
        max-width: 400px;
      }
      .keys-count {
        color: #555;
        font-size: 12px;
      }
    `,
  ],
})
export class TemplateCardComponent {
  @Input() name = '';
  @Input() description?: string;
  @Input() category?: string;
  @Input() keysCount = 0;

  @Output() open = new EventEmitter<void>();
  @Output() download = new EventEmitter<void>();
}
