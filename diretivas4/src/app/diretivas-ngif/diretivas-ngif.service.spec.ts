import { TestBed, inject } from '@angular/core/testing';

import { DiretivasNgifService } from './diretivas-ngif.service';

describe('DiretivasNgifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiretivasNgifService]
    });
  });

  it('should be created', inject([DiretivasNgifService], (service: DiretivasNgifService) => {
    expect(service).toBeTruthy();
  }));
});
