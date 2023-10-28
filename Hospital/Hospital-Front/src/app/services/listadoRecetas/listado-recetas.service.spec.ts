import { TestBed } from '@angular/core/testing';

import { ListadoRecetasService } from './listado-recetas.service';

describe('ListadoRecetasService', () => {
  let service: ListadoRecetasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoRecetasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
