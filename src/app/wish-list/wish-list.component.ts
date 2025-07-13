import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../modals/product';

@Component({
  selector: 'app-wish-list',
  imports: [],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {
   

   @Input() wishListItems: Product[] = []

   @Input() totalItems: number = 0;

   @Output() moveToCart = new EventEmitter<{index:number, product:Product}>();
   
   ngOnChanges(){

   }

  constructor( ){}
   onMoveToCart(indexNum:number){
    this.moveToCart.emit({index:indexNum, product:this.wishListItems[indexNum]});
    
   }

    
}
