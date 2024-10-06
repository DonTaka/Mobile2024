import { TestBed } from '@angular/core/testing';

import { APIControllerService } from './apicontroller.service';

describe('APIControllerService', () => {
  let service: APIControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
