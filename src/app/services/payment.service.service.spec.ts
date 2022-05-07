import { TestBed } from '@angular/core/testing';

import { Payment.ServiceService } from './payment.service.service';

describe('Payment.ServiceService', () => {
  let service: Payment.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Payment.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
