import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private ele: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string|null): void {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
