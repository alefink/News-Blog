import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appClassToggle]'
})
export class ClassToggleDirective {

  @HostBinding('class.visible') isToggled = false;

  @HostListener('click') toggleClass() {
    this.isToggled = !this.isToggled;
  }
}
