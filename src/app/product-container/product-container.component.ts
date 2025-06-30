import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent,CommonModule,FormsModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {

   constructor(public cartService:CartService , private productService:ProductService){}
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
      this.categories = Array.from(new Set(data.map(product => product.category)))
      this.products = data;
    },
    error: (err)=>{
      alert("Request Failed" + err);
    }
  })
}
}
 
