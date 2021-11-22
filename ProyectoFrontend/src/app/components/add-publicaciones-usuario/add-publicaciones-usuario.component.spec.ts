import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublicacionesUsuarioComponent } from './add-publicaciones-usuario.component';

describe('AddPublicacionesUsuarioComponent', () => {
  let component: AddPublicacionesUsuarioComponent;
  let fixture: ComponentFixture<AddPublicacionesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPublicacionesUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPublicacionesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
