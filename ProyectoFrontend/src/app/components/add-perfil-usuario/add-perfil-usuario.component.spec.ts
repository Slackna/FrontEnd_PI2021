import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerfilUsuarioComponent } from './add-perfil-usuario.component';

describe('AddPerfilUsuarioComponent', () => {
  let component: AddPerfilUsuarioComponent;
  let fixture: ComponentFixture<AddPerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPerfilUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
