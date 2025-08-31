import { TestBed } from '@angular/core/testing';

import { ComplantServiceService } from './complant-service.service';

describe('ComplantServiceService', () => {
  let service: ComplantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
