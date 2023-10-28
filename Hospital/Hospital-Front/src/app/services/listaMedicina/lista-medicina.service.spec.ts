import { TestBed } from '@angular/core/testing';

import { ListaMedicinaService } from './lista-medicina.service';

describe('ListaMedicinaService', () => {
  let service: ListaMedicinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaMedicinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
