import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TemplateCardComponent } from './template-card.component';

describe('TemplateCardComponent', () => {
  let component: TemplateCardComponent;
  let fixture: ComponentFixture<TemplateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateCardComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateCardComponent);
    component = fixture.componentInstance;
    component.name = 'Договор';
    component.category = 'Legal';
    component.keysCount = 5;
    fixture.detectChanges();
  });

  it('renders name, category and keysCount', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Договор');
    expect(el.textContent).toContain('Legal');
    expect(el.textContent).toContain('5');
  });

  it('emits open when open button is clicked', () => {
    const spy = jest.fn();
    component.open.subscribe(spy);
    const buttons = fixture.nativeElement.querySelectorAll('button');
    (buttons[0] as HTMLButtonElement).click();
    expect(spy).toHaveBeenCalled();
  });

  it('emits download when download button is clicked', () => {
    const spy = jest.fn();
    component.download.subscribe(spy);
    const buttons = fixture.nativeElement.querySelectorAll('button');
    (buttons[1] as HTMLButtonElement).click();
    expect(spy).toHaveBeenCalled();
  });
});
