import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    // private _elementRef: ElementRef, 
    // private _renderer2: Renderer2
    ){}

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer2.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow' );
    this.backgroundColor = 'yellow';
  };

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer2.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white' );
    this.backgroundColor = 'white';
  };

  //@HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };

  private backgroundColor: string = '';

}
