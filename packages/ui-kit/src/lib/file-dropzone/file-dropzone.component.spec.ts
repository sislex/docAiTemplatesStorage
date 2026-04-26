import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { FileDropzoneComponent } from './file-dropzone.component';

function makeFile(name: string, size: number, type = 'application/octet-stream'): File {
  const blob = new Blob([new Uint8Array(size)], { type });
  return new File([blob], name, { type });
}

/** jsdom does not implement DragEvent — build a lookalike. */
function makeDragEvent(type: string, files: File[] = []): any {
  const ev: any = new Event(type, { bubbles: true, cancelable: true });
  ev.dataTransfer = { files };
  return ev;
}

describe('FileDropzoneComponent', () => {
  let component: FileDropzoneComponent;
  let fixture: ComponentFixture<FileDropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [FileDropzoneComponent] }).compileComponents();
    fixture = TestBed.createComponent(FileDropzoneComponent);
    component = fixture.componentInstance;
    component.accept = '.docx';
    component.maxSize = 1024;
    fixture.detectChanges();
  });

  it('emits filesSelected on drop with valid file', () => {
    const spy = jest.fn();
    component.filesSelected.subscribe(spy);

    const file = makeFile('doc.docx', 500);
    const event = makeDragEvent('drop', [file]);

    component.onDrop(event);
    expect(spy).toHaveBeenCalledWith([file]);
  });

  it('rejects files with wrong extension', () => {
    const accepted = jest.fn();
    const rejected = jest.fn();
    component.filesSelected.subscribe(accepted);
    component.filesRejected.subscribe(rejected);

    const file = makeFile('doc.pdf', 500);
    const event = makeDragEvent('drop', [file]);

    component.onDrop(event);
    expect(accepted).not.toHaveBeenCalled();
    expect(rejected).toHaveBeenCalledWith([file]);
  });

  it('rejects files over maxSize', () => {
    const rejected = jest.fn();
    component.filesRejected.subscribe(rejected);

    const file = makeFile('big.docx', 2048); // 2KB > 1KB limit
    const event = makeDragEvent('drop', [file]);

    component.onDrop(event);
    expect(rejected).toHaveBeenCalledWith([file]);
  });

  it('toggles isOver on dragover/dragleave', () => {
    const over = makeDragEvent('dragover');
    component.onDragOver(over);
    expect(component.isOver).toBe(true);

    component.onDragLeave(makeDragEvent('dragleave'));
    expect(component.isOver).toBe(false);
  });
});
