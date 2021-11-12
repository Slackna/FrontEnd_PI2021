import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriaIndustriasComponent } from './lista-categoria-industrias.component';

describe('ListaCategoriaIndustriasComponent', () => {
  let component: ListaCategoriaIndustriasComponent;
  let fixture: ComponentFixture<ListaCategoriaIndustriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriaIndustriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriaIndustriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
