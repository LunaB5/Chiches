import { TestBed } from '@angular/core/testing';

import { ChichesCartService } from './chiches-cart.service';

describe('ChichesCartService', () => {
  let service: ChichesCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChichesCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
