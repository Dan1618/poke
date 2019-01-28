import { TestBed } from '@angular/core/testing';

import { SearchingCommunicationService } from './searching-communication.service';

describe('SearchingCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchingCommunicationService = TestBed.get(SearchingCommunicationService);
    expect(service).toBeTruthy();
  });
});
