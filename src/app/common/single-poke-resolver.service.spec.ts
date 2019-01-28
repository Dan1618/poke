import { TestBed } from '@angular/core/testing';

import { SinglePokeResolverService } from './single-poke-resolver.service';

describe('SinglePokeResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SinglePokeResolverService = TestBed.get(SinglePokeResolverService);
    expect(service).toBeTruthy();
  });
});
