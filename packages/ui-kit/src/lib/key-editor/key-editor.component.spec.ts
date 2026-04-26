import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { KeyEditorComponent, UiTemplateKey } from './key-editor.component';

describe('KeyEditorComponent', () => {
  let component: KeyEditorComponent;
  let fixture: ComponentFixture<KeyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [KeyEditorComponent] }).compileComponents();
    fixture = TestBed.createComponent(KeyEditorComponent);
    component = fixture.componentInstance;
    component.keys = [{ name: 'fullName', type: 'string', label: 'Имя', required: true }];
    fixture.detectChanges();
  });

  it('initializes rows from input keys', () => {
    expect(component.rows).toHaveLength(1);
    expect(component.rows[0].name).toBe('fullName');
  });

  it('add() appends a blank row and emits', () => {
    const spy = jest.fn();
    component.keysChange.subscribe(spy);
    component.add();
    expect(component.rows).toHaveLength(2);
    expect(spy).toHaveBeenCalled();
  });

  it('remove() deletes a row at index and emits', () => {
    const spy = jest.fn();
    component.keysChange.subscribe(spy);
    component.remove(0);
    expect(component.rows).toHaveLength(0);
    expect(spy).toHaveBeenCalledWith([]);
  });

  it('isValidName() accepts valid names', () => {
    expect(component.isValidName('fullName')).toBe(true);
    expect(component.isValidName('_private')).toBe(true);
    expect(component.isValidName('field_1')).toBe(true);
  });

  it('isValidName() rejects invalid names', () => {
    expect(component.isValidName('123bad')).toBe(false);
    expect(component.isValidName('with-dash')).toBe(false);
    expect(component.isValidName('has space')).toBe(false);
    expect(component.isValidName('')).toBe(false);
  });

  it('isValid() reports false when any row has invalid name', () => {
    component.rows = [{ name: 'ok', type: 'string', label: 'A', required: false }];
    expect(component.isValid()).toBe(true);
    component.rows.push({ name: '1bad', type: 'string', label: 'B', required: false });
    expect(component.isValid()).toBe(false);
  });
});
