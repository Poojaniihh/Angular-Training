import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RedHighlightDirective } from '../directives/red-highlight.directive';

@Component({
  selector: 'app-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true
})
export class ProductComponent {

    @Input() product!: Product;

    @Output() productOutput = new EventEmitter<Product>();

    addToCart(){
      this.productOutput.emit(this.product);
    }
  

}
