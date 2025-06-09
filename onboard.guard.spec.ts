import { TestBed } from '@angular/core/testing';

import { OnboardGuard } from './onboard.guard';

describe('OnboardGuard', () => {
  let guard: OnboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
