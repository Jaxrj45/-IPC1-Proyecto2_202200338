import { TestBed } from '@angular/core/testing';

import { EnfermeraCitaService } from './enfermera-cita.service';

describe('EnfermeraCitaService', () => {
  let service: EnfermeraCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnfermeraCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
