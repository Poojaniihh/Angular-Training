import { Injectable, signal } from '@angular/core';
import { Product } from '../modals/product';
 

@Injectable({
  providedIn: 'root'
})
export class wishListService {
  
  public count = signal<number>(0);

  private wishListItems = signal<Product[]>([]);

  public totalItems = signal<number>(0);

  addToWishList(product: Product) {
      console.log("serviceee")
    //to avoid refference issues, we create a new object
    const productToAdd = {...product};

  

    this.wishListItems.update(items => [...items, productToAdd ]);

        console.log(this.wishListItems())
    this.updateTotalItems();
  }

  getWishListItems() {
    return this.wishListItems();
  }

  updateTotalItems() {
    this.totalItems.set(this.wishListItems().length);
  }

  removeItem(index: number) {
    this.wishListItems.update(items => {
      const newItems = [...items];
      newItems.splice(index, 1);
      return newItems;
    });
    this.updateTotalItems();
  }

  
  constructor( ) {}

}