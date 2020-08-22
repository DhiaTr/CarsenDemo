import { TestBed } from '@angular/core/testing';

import { OrderArchiveService } from './order-archive.service';

describe('OrderArchiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderArchiveService = TestBed.get(OrderArchiveService);
    expect(service).toBeTruthy();
  });
});
