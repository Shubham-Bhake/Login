import { TestBed } from '@angular/core/testing';

import { FeebackGuard } from './feeback.guard';

describe('FeebackGuard', () => {
  let guard: FeebackGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FeebackGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
