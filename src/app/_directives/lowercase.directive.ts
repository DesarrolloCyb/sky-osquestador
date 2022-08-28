import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
  selector: '[toLowerCase]',
})
export class LowerCaseDirective {
  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('input', ['$event']) onEvent($event: any): any {
    const upper = this.el.nativeElement.value.toLowerCase();
    if (this.control.control) {
      this.control.control.setValue(upper);
    }
  }
}
