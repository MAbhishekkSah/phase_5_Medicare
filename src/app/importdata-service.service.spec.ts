import { TestBed } from '@angular/core/testing';

import { ImportdataServiceService } from './importdata-service.service';

describe('ImportdataServiceService', () => {
  let service: ImportdataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportdataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
