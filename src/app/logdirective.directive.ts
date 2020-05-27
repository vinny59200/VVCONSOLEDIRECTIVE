import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogdirective]'
})
export class LogdirectiveDirective {

  constructor() { }
  @HostListener('click') onClick() {
   console.log("logging the click");
  }
}
