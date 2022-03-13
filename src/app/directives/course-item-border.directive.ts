import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as numbers from '../common/numbers';

@Directive({
  selector: '[course-item-border]',
})
export class CourseItemBorderDirective implements OnInit {
  @Input('course-item-border')
  public creationDate: number = 0;

  private currentDate: number = Date.now();
  private fourteenDays: number =
    numbers.MILLESECONDS_IN_SECOND *
    numbers.SECONDS_IN_MINUTE *
    numbers.MINUTES_IN_HOUR *
    numbers.HOURS_IN_DAY *
    (numbers.DAYS_IN_WEEK * 2);

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
  }

  private changeBorderColor(color: string) {
    this.element.nativeElement.style.borderColor = color;
  }
}
