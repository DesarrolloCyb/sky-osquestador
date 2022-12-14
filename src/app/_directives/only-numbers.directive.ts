import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumbers]',
})
export class OnlyNumbersDirective {
  onlyNumbersRegExp: RegExp = new RegExp('^\\d+$');

  @HostListener('paste', ['$event']) pasteClipboard(
    e: ClipboardEvent
  ): boolean {
    let dataText = '';
    if (e.clipboardData) {
      dataText = e.clipboardData.getData('text');
    }
    const data = dataText;
    return this.onlyNumbersRegExp.test(data) ? true : false;
  }

  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent): boolean {
    return e.ctrlKey ||
      e.metaKey ||
      e.keyCode === 8 ||
      e.keyCode === 9 ||
      e.keyCode === 37 ||
      e.keyCode === 39 ||
      e.keyCode === 46 ||
      e.keyCode === 91 ||
      e.keyCode === 93
      ? true
      : this.onlyNumbersRegExp.test(e.key);
  }
}
