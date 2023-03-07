import { TestBed } from '@angular/core/testing';

import { GetImagesService } from './get-images.service';

describe('GetImagesService', () => {
  let service: GetImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
