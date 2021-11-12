import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriaConstruccionComponent } from './lista-categoria-construccion.component';

describe('ListaCategoriaConstruccionComponent', () => {
  let component: ListaCategoriaConstruccionComponent;
  let fixture: ComponentFixture<ListaCategoriaConstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriaConstruccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriaConstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
