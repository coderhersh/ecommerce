import { TestBed } from '@angular/core/testing';

import { GetWomenProductsService } from './get-women-products.service';

describe('GetWomenProductsService', () => {
  let service: GetWomenProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWomenProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
