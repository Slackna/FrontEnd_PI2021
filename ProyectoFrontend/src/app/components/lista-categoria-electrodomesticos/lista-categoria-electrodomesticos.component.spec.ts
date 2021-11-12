import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriaElectrodomesticosComponent } from './lista-categoria-electrodomesticos.component';

describe('ListaCategoriaElectrodomesticosComponent', () => {
  let component: ListaCategoriaElectrodomesticosComponent;
  let fixture: ComponentFixture<ListaCategoriaElectrodomesticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriaElectrodomesticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriaElectrodomesticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
