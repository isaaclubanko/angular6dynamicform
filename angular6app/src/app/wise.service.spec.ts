import { TestBed, inject } from '@angular/core/testing';

import { WiseService } from './wise.service';

describe('WiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WiseService]
    });
  });

  it('should be created', inject([WiseService], (service: WiseService) => {
    expect(service).toBeTruthy();
  }));
});
