import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Otorbi prende la laptop!');
  });

  it('should change the name when a new one is submitted', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input') as HTMLInputElement;
    const button = compiled.querySelector('button') as HTMLButtonElement;

    input.value = 'Adrián';
    button.click();
    await fixture.whenStable();

    expect(compiled.querySelector('h1')?.textContent).toContain('Adrián prende la laptop!');
    expect(input.value).toBe('');
  });

  it('should ignore an empty name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input') as HTMLInputElement;
    const button = compiled.querySelector('button') as HTMLButtonElement;

    input.value = '   ';
    button.click();
    await fixture.whenStable();

    expect(compiled.querySelector('h1')?.textContent).toContain('Otorbi prende la laptop!');
  });
});
