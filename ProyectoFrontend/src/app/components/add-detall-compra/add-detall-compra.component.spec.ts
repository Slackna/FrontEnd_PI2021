import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetallCompraComponent } from './add-detall-compra.component';

describe('AddDetallCompraComponent', () => {
  let component: AddDetallCompraComponent;
  let fixture: ComponentFixture<AddDetallCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetallCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetallCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
