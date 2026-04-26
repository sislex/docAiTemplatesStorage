import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerComponent, NoopAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
  });

  it('creates', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('renders label when provided', () => {
    component.label = 'Загрузка…';
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Загрузка…');
  });

  it('applies overlay class when overlay=true', () => {
    component.overlay = true;
    fixture.detectChanges();
    const wrap = (fixture.nativeElement as HTMLElement).querySelector('.spinner-wrapper');
    expect(wrap?.classList.contains('spinner-wrapper--overlay')).toBe(true);
  });
});
