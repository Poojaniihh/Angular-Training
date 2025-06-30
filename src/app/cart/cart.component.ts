import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../modals/product';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
   @Input() cartItems: Product[] = []

   @Input() totalItems: number = 0;

   @Output() removeItem = new EventEmitter<number>();

  constructor( ){}
   onRemoveClick(index:number){
    this.removeItem.emit(index);
   }
}
