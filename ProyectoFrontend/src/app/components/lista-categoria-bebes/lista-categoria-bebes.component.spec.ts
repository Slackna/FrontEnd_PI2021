import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriaBebesComponent } from './lista-categoria-bebes.component';

describe('ListaCategoriaBebesComponent', () => {
  let component: ListaCategoriaBebesComponent;
  let fixture: ComponentFixture<ListaCategoriaBebesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCategoriaBebesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCategoriaBebesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
