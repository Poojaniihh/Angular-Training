import { Injectable, signal } from '@angular/core';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public count = signal<number>(0);

  private cartItems = signal<Product[]>([]);

  public totalItems = signal<number>(0);

  addToCart(product: Product) {

    //to avoid refference issues, we create a new object
    const productToAdd = {...product};

  

    this.cartItems.update(items => [...items, productToAdd ]);

     

    this.updateTotalItems();
  }

  getCartItems() {
    return this.cartItems();
  }

  updateTotalItems() {
    this.totalItems.set(this.cartItems().length);
  }

  removeItem(index: number) {
    this.cartItems.update(items => {
      const newItems = [...items];
      newItems.splice(index, 1);
      return newItems;
    });
    this.updateTotalItems();
  }

  constructor() { }
}