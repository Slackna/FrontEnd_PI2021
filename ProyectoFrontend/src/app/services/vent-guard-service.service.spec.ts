import { TestBed } from '@angular/core/testing';

import { VentGuardServiceService } from './vent-guard-service.service';

describe('VentGuardServiceService', () => {
  let service: VentGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
