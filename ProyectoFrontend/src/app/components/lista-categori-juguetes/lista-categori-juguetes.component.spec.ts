import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriJuguetesComponent } from './lista-categori-juguetes.component';

describe('ListaCategoriJuguetesComponent', () => {
  let component: ListaCategoriJuguetesComponent;
  let fixture: ComponentFixture<ListaCategoriJuguetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriJuguetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriJuguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
