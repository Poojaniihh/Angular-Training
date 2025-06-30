import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-cart-container',
  imports: [CartComponent],
  templateUrl: './cart-container.component.html',
  styleUrl: './cart-container.component.scss',
  standalone: true
})
export class CartContainerComponent {
      constructor(public cartService: CartService){}

      onRemoveItemOutput(index:number){
        this.cartService.removeItem(index);
      }
}
