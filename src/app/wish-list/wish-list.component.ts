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

   @Output() moveToCart = new EventEmitter<number>();
   
  
   


   ngOnChanges(){

    console.log("wishlist ----" )
    console.log("wishListAdd")
   }

  constructor( ){}
   onMoveToCart(index:number){
    this.moveToCart.emit(index);
    
   }

}
