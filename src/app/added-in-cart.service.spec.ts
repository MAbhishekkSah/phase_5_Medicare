import { TestBed } from '@angular/core/testing';

import { AddedInCartService } from './added-in-cart.service';

describe('AddedInCartService', () => {
  let service: AddedInCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddedInCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
