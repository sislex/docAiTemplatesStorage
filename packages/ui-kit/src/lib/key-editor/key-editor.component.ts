import { CommonModule } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Placeholder name validation regex (mirrors shared-types/isValidKeyName). */
const KEY_NAME_RE = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

export type UiKeyType = 'string' | 'number' | 'date' | 'boolean';

export interface UiTemplateKey {
  name: string;
  type: UiKeyType;
  label: string;
  required: boolean;
  defaultValue?: string;
}

@Component({
  selector: 'ts-key-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Тип</th>
          <th>Метка</th>
          <th>Обязательное</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows; let i = index" [class.row--invalid]="!isValidName(row.name)">
          <td><input [(ngModel)]="row.name" (ngModelChange)="emit()" /></td>
          <td>
            <select [(ngModel)]="row.type" (ngModelChange)="emit()">
              <option value="string">string</option>
              <option value="number">number</option>
              <option value="date">date</option>
              <option value="boolean">boolean</option>
            </select>
          </td>
          <td><input [(ngModel)]="row.label" (ngModelChange)="emit()" /></td>
          <td><input type="checkbox" [(ngModel)]="row.required" (ngModelChange)="emit()" /></td>
          <td><button type="button" (click)="remove(i)">✕</button></td>
        </tr>
      </tbody>
    </table>
    <button type="button" (click)="add()">+ Добавить ключ</button>
  `,
  styles: [
    `
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th,
      td {
        padding: 4px 8px;
        border-bottom: 1px solid #eee;
      }
      .row--invalid input {
        border-color: #e53935;
      }
    `,
  ],
})
export class KeyEditorComponent implements OnInit {
  @Input() keys: UiTemplateKey[] = [];
  @Output() keysChange = new EventEmitter<UiTemplateKey[]>();

  rows: UiTemplateKey[] = [];

  ngOnInit(): void {
    this.rows = this.keys.map((k) => ({ ...k }));
  }

  add(): void {
    this.rows = [...this.rows, { name: '', type: 'string', label: '', required: false }];
    this.emit();
  }

  remove(index: number): void {
    this.rows = this.rows.filter((_, i) => i !== index);
    this.emit();
  }

  /** Validates a key name against the placeholder regex. */
  isValidName(name: string): boolean {
    return KEY_NAME_RE.test(name);
  }

  /** Returns true if all rows have valid names (useful for parent validation). */
  isValid(): boolean {
    return this.rows.every((r) => this.isValidName(r.name));
  }

  emit(): void {
    this.keysChange.emit([...this.rows]);
  }
}
