import { TestBed } from '@angular/core/testing';

import { NgDragonlashService } from './ng-dragonlash.service';

describe('NgDragonlashService', () => {
  let service: NgDragonlashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDragonlashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
