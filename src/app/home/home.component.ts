import { Component, inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {

  constructor(public cartService: CartService) {}

  loggerService = inject(LoggerService);

  numbers: number[] = [];

  ngOnInit() {
    console.log("Home component initialized");
  }
  
  ngOnDestroy() {
    console.log("Home component destroyed"); 
  }

  ngDoCheck() {
    console.log("Home component changed detection triggered");
  }

  ngOnChanges() {
    console.log("Home component changes dectected");
  }

  myObservable = new Observable<number>((observer) => {
    setTimeout(()=> {observer.next(1)},1000)
    setTimeout(()=> {observer.next(2)},2000)
    setTimeout(()=> {observer.next(3)},3000)
    setTimeout(()=> {observer.next(4)},4000)
    setTimeout(()=> {observer.next(5)},5000)
 
  })

  testEventLoop(){
    console.log("First line")

    setTimeout(()=> {
      console.log("Second line")
    },0)
     
      console.log("Third line")

      setTimeout(()=> {
      console.log("Fourth line")
    },2000)

    console.log("last")
    
  }

  getData(){
    this.myObservable.subscribe(
      {
        next:(data) => {
          this.numbers.push(data)
        },
        error : (err) => {
          alert('data fetch')
        },
        complete: () => {
        console.log('onservable completed')
        }
      }
    )
  }

  count=0;
  

  increment() {
    this.loggerService.log("Increment clicked");
    
    console.log(this.cartService.count());
    

    let count = this.cartService.count() + 1;
    
    this.cartService.count.set(count);
}



decrement() {
    this.loggerService.log("Decrement clicked");
    
    console.log(this.cartService.count());
    

    let count = this.cartService.count() - 1;
    
    this.cartService.count.set(count);
}
}