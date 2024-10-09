import { TestBed } from '@angular/core/testing';

import { BlogShareService } from './blog-share.service';

describe('BlogShareService', () => {
  let service: BlogShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
