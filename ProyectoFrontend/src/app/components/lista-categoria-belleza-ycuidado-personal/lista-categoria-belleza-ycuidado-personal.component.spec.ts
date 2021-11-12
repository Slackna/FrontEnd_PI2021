import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriaBellezaYCuidadoPersonalComponent } from './lista-categoria-belleza-ycuidado-personal.component';

describe('ListaCategoriaBellezaYCuidadoPersonalComponent', () => {
  let component: ListaCategoriaBellezaYCuidadoPersonalComponent;
  let fixture: ComponentFixture<ListaCategoriaBellezaYCuidadoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriaBellezaYCuidadoPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriaBellezaYCuidadoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
