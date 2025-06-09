import { TestBed } from '@angular/core/testing';

import { EmployeeFeedbackService } from './employee-feedback.service';

describe('EmployeeFeedbackService', () => {
  let service: EmployeeFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
