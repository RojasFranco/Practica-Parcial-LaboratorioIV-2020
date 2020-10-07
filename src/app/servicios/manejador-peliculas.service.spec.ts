import { TestBed } from '@angular/core/testing';

import { ManejadorPeliculasService } from './manejador-peliculas.service';

describe('ManejadorPeliculasService', () => {
  let service: ManejadorPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejadorPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
