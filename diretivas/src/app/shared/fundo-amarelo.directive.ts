import { Directive, ElementRef, Renderer2  } from '@angular/core';

@Directive({
  selector: 'h3[fundoAmarelo]'
})
export class FundoAmareloDirective {



  constructor(
    private _elementRef: ElementRef,
    private _renderer2: Renderer2
    ) { 
    // console.log(this._elementRef.nativeElement.style.backgroundColor = 'yellow');
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'
    this._renderer2.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
  }

}
