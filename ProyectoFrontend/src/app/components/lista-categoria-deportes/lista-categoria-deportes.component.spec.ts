import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriaDeportesComponent } from './lista-categoria-deportes.component';

describe('ListaCategoriaDeportesComponent', () => {
  let component: ListaCategoriaDeportesComponent;
  let fixture: ComponentFixture<ListaCategoriaDeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriaDeportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriaDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
