import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListContainerComponent } from './wish-list-container.component';

describe('WishListContainerComponent', () => {
  let component: WishListContainerComponent;
  let fixture: ComponentFixture<WishListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishListContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
