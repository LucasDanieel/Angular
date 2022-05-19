import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor() { }

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
