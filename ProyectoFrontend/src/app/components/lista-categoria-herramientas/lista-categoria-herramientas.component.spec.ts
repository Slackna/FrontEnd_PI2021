import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriaHerramientasComponent } from './lista-categoria-herramientas.component';

describe('ListaCategoriaHerramientasComponent', () => {
  let component: ListaCategoriaHerramientasComponent;
  let fixture: ComponentFixture<ListaCategoriaHerramientasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriaHerramientasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriaHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
