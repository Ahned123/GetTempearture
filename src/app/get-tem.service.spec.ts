import { TestBed } from '@angular/core/testing';

import { GetTemService } from './get-tem.service';

describe('GetTemService', () => {
  let service: GetTemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
