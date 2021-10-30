import { TestBed } from '@angular/core/testing';

import { UsuarioVendedorService } from './usuario-vendedor.service';

describe('UsuarioVendedorService', () => {
  let service: UsuarioVendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioVendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
