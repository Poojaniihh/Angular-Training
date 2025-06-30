import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { CartComponent } from './cart/cart.component';
import { CartContainerComponent } from './cart-container/cart-container.component';

export const routes: Routes = [
    {path: 'home' , component :HomeComponent},
    {path: 'product', component:ProductContainerComponent},
    {path: 'about', component:AboutComponent},
    {path: 'cart', component:CartContainerComponent}
];
