import { TestBed } from '@angular/core/testing';

import { GetAccessoriesProductsService } from './get-accessories-products.service';

describe('GetAccessoriesProductsService', () => {
  let service: GetAccessoriesProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAccessoriesProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
