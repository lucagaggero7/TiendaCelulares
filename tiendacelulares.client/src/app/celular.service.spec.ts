import { TestBed } from '@angular/core/testing';

import { CelularService } from './celular.service';

describe('CelularService', () => {
  let service: CelularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
