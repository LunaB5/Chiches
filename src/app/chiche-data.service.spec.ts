import { TestBed } from '@angular/core/testing';

import { ChicheDataService } from './chiche-data.service';

describe('ChicheDataService', () => {
  let service: ChicheDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChicheDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
