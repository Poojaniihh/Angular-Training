import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { wishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent,CommonModule,FormsModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {
wishListAddEvent($event: Product) {
this.wishListService.addToWishList($event);
}

   constructor(public cartService:CartService , private productService:ProductService , public wishListService: wishListService){}
  products:Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  filteredCategory: Product[]=[];

productOutPutEvent(product: Product){
  this.cartService.addToCart(product);
}


filterByCategory(category: string){
  this.selectedCategory = category;

  if (category == 'all'){
    this.filteredCategory = this.products
  }else{
    this.filteredCategory = this.products.filter(product => product.category === category);
  }

}
ngOnInit(){
  this.productService.getProducts().subscribe({
    next: (data)=>{
      this.products = data;
    },
    error: (err)=>{
      alert("Request Failed" + err);
    }
  })

   this.productService.getCategories().subscribe({
    next: (data)=>{
      this.categories = data
    },
    error: (err)=>{
      alert("Request Failed" + err);
    }
  })  
}
}
 
