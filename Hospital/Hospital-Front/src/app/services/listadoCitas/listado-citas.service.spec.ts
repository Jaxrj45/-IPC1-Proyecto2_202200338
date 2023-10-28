import { TestBed } from '@angular/core/testing';

import { ListadoCitasService } from './listado-citas.service';

describe('ListadoCitasService', () => {
  let service: ListadoCitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoCitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
