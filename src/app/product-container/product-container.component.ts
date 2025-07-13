import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { wishListService } from '../services/wish-list.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent,CommonModule,FormsModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {
  filteredProducts: Product[] = [];
   
  

private setupSearchSubscription(){

  this.searchSubject.pipe(
    debounceTime(300),
    distinctUntilChanged()
  ).subscribe(val =>
    this.filterProducts()
  );

  
}

ngOnDestroy(){
  this.searchSubject.complete();
}
  filterProducts() {

    let filtered = this.products;

    if (this.selectedCategory != 'all'){
      filtered = filtered.filter(p => p.category === this.selectedCategory)
    }
    if (this.searchTerm){

      let searchTermLower = this.searchTerm.toLowerCase()
      
      filtered = filtered.filter(
        p => p.title.toLowerCase().includes(searchTermLower)
         || p.description.toLowerCase().includes(searchTermLower)
      )
    }
    
    this.filteredCategory = filtered;
  }
  

onInputChange($event: string) {
  this.searchSubject.next($event)

    console.log($event )
  
}

wishListAddEvent($event: Product) {
this.wishListService.addToWishList($event);
}

   constructor(public cartService:CartService , private productService:ProductService , public wishListService: wishListService){}
  products:Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  filteredCategory: Product[]=[];


  searchTerm = '';
  private searchSubject = new Subject<String>();


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
  this.setupSearchSubscription()
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
 
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

