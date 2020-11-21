import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mousemove')
  applyStyle() {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", this.appHighlight);
  }

  @HostListener('mouseout')
  removeStyle() {
    this.renderer.removeStyle(this.el.nativeElement, "backgroundColor");
  }

}
