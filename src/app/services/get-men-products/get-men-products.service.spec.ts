import { TestBed } from '@angular/core/testing';

import { GetMenProductsService } from './get-men-products.service';

describe('GetMenProductsService', () => {
  let service: GetMenProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMenProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
