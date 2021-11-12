import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCategoriaTecnologiaComponent } from './listado-categoria-tecnologia.component';

describe('ListadoCategoriaTecnologiaComponent', () => {
  let component: ListadoCategoriaTecnologiaComponent;
  let fixture: ComponentFixture<ListadoCategoriaTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCategoriaTecnologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCategoriaTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
