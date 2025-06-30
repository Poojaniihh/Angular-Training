import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedHighlight]'
})
export class RedHighlightDirective {

  constructor(private el:ElementRef) { 

    el.nativeElement.style.color = 'red';

  }

}
