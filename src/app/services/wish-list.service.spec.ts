import { TestBed } from '@angular/core/testing';
import { wishListService } from './wish-list.service';
 

describe('wishListService', () => {
  let service: wishListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(wishListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
