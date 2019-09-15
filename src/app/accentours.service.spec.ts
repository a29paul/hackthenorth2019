import { TestBed } from '@angular/core/testing';

import { AccentoursService } from './accentours.service';

describe('AccentoursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccentoursService = TestBed.get(AccentoursService);
    expect(service).toBeTruthy();
  });
});
