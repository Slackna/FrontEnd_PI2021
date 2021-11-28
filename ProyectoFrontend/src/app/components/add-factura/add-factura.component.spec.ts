import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacturaComponent } from './add-factura.component';

describe('AddFacturaComponent', () => {
  let component: AddFacturaComponent;
  let fixture: ComponentFixture<AddFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AddFacturaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-pdf'`, () => {
    const fixture = TestBed.createComponent(AddFacturaComponent);
    const app = fixture.componentInstance;
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AddFacturaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-pdf app is running!');
  });
});
