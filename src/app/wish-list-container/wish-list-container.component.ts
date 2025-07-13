import { Component } from '@angular/core';
import { WishListComponent } from "../wish-list/wish-list.component";
import { wishListService } from '../services/wish-list.service';
import { Product } from '../modals/product';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wish-list-container',
  imports: [WishListComponent],
  templateUrl: './wish-list-container.component.html',
  styleUrl: './wish-list-container.component.scss'
})
export class WishListContainerComponent {


  
onMoveToCart($event: {index:number,product:Product}) {
this.wishListService.removeItem($event.index);
this.cartService.addToCart($event.product);
}

  constructor(public wishListService: wishListService, private cartService:CartService){

  }


}
