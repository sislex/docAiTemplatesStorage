import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'ts-file-dropzone',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="dropzone" [class.dropzone--active]="isOver">
      <input
        type="file"
        #fileInput
        (change)="onFileInput($event)"
        [accept]="accept"
        [multiple]="multiple"
        hidden
      />
      <p>{{ placeholder }}</p>
      <button type="button" (click)="fileInput.click()">Выбрать файл</button>
    </div>
  `,
  styles: [
    `
      .dropzone {
        border: 2px dashed #ccc;
        border-radius: 8px;
        padding: 32px;
        text-align: center;
        transition: border-color 0.2s;
      }
      .dropzone--active {
        border-color: #3f51b5;
        background: rgba(63, 81, 181, 0.05);
      }
    `,
  ],
})
export class FileDropzoneComponent {
  /** Accept attribute (mime types, e.g. '.docx,application/...'). */
  @Input() accept = '';

  /** Maximum file size in bytes. Files over limit are filtered out. */
  @Input() maxSize = 20 * 1024 * 1024;

  /** Whether multiple files can be selected. */
  @Input() multiple = false;

  /** Placeholder text shown inside the dropzone. */
  @Input() placeholder = 'Перетащите файл сюда';

  /** Emitted with accepted files after drop or input change. */
  @Output() filesSelected = new EventEmitter<File[]>();

  /** Emitted when files are rejected by type or size. */
  @Output() filesRejected = new EventEmitter<File[]>();

  @HostBinding('class.is-over') isOver = false;

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isOver = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isOver = false;
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isOver = false;
    const files = Array.from(event.dataTransfer?.files ?? []);
    this.emitFiltered(files);
  }

  onFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    this.emitFiltered(files);
  }

  private emitFiltered(files: File[]): void {
    const accepted: File[] = [];
    const rejected: File[] = [];
    for (const f of files) {
      if (this.isAccepted(f)) accepted.push(f);
      else rejected.push(f);
    }
    if (accepted.length) this.filesSelected.emit(accepted);
    if (rejected.length) this.filesRejected.emit(rejected);
  }

  private isAccepted(file: File): boolean {
    if (file.size > this.maxSize) return false;
    if (!this.accept) return true;
    const patterns = this.accept.split(',').map((s) => s.trim().toLowerCase());
    const name = file.name.toLowerCase();
    const type = file.type.toLowerCase();
    return patterns.some((p) => (p.startsWith('.') && name.endsWith(p)) || (p && type === p));
  }
}
