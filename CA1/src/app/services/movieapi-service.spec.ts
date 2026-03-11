import { TestBed } from '@angular/core/testing';

import { Movieapi } from './movieapi-service';

describe('Movieapi', () => {
  let service: Movieapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Movieapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
