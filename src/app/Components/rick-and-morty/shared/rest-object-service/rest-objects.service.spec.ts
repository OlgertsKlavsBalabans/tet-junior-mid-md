import { TestBed } from '@angular/core/testing';

import { RestObjectsService } from './rest-objects.service';

describe('RestObjectsService', () => {
  let service: RestObjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestObjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
