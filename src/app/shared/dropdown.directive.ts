import {
  Directive,
  HostListener,
  HostBinding,
  Renderer2,
  DoCheck,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private isClickedOnce : boolean = true;
  @HostBinding('class.open') isOpen : boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if(!this.isOpen) {
      this.isOpen = true;
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if(this.isOpen){
      this.isOpen = false;
    }
  }
  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  }

}
