import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriaHogarmueblesComponent } from './lista-categoria-hogarmuebles.component';

describe('ListaCategoriaHogarmueblesComponent', () => {
  let component: ListaCategoriaHogarmueblesComponent;
  let fixture: ComponentFixture<ListaCategoriaHogarmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriaHogarmueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriaHogarmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
