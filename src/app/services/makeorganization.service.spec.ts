import { TestBed } from '@angular/core/testing';

import { MakeorganizationService } from './makeorganization.service';

describe('MakeorganizationService', () => {
  let service: MakeorganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeorganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
