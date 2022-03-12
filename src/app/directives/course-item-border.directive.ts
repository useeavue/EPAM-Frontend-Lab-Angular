import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[course-item-border]',
})
export class CourseItemBorderDirective implements OnInit {
  @Input('course-item-border')
  public creationDate: number = 0;
  private currentDate: number = Date.now();
  private fourteenDays: number = 1000 * 60 * 60 * 24 * 14;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (
      this.creationDate < this.currentDate &&
      this.creationDate >= this.currentDate - this.fourteenDays
    ) {
      this.changeBorderColor('green');
    }
    if (this.creationDate > this.currentDate) {
      this.changeBorderColor('blue');
    }
    console.log(this.element);
    console.log(this.creationDate);
    console.log(this.currentDate);
  }

  private changeBorderColor(color: string) {
    this.element.nativeElement.style.borderColor = color;
  }
}
