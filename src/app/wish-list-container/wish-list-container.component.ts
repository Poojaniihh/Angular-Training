import { Component } from '@angular/core';
import { WishListComponent } from "../wish-list/wish-list.component";
import { wishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-wish-list-container',
  imports: [WishListComponent],
  templateUrl: './wish-list-container.component.html',
  styleUrl: './wish-list-container.component.scss'
})
export class WishListContainerComponent {


  
onMoveToCart($event: number) {
throw new Error('Method not implemented.');
}

  constructor(public wishListService: wishListService){

  }

}
