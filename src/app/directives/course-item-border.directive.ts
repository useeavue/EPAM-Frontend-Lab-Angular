import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import * as numbers from '../common/numbers';

@Directive({
  selector: '[course-item-border]',
})
export class CourseItemBorderDirective implements OnInit {
  @Input('course-item-border')
  public date: string = '';

  private creationDate: number = 0;
  private currentDate: number = Date.now();
  private fourteenDays: number;

  constructor(private element: ElementRef, private renderer2: Renderer2) {
    this.fourteenDays =
      numbers.MILLESECONDS_IN_SECOND *
      numbers.SECONDS_IN_MINUTE *
      numbers.MINUTES_IN_HOUR *
      numbers.HOURS_IN_DAY *
      (numbers.DAYS_IN_WEEK * 2);
  }

  ngOnInit() {
    this.creationDate = Date.parse(this.date);
    if (this.isBorderGreen()) {
      this.changeBorderColor('green');
    }
    if (this.isBorderBlue()) {
      this.changeBorderColor('blue');
    }
  }

  private isBorderGreen(): boolean {
    return this.creationDate < this.currentDate &&
      this.creationDate >= this.currentDate - this.fourteenDays
      ? true
      : false;
  }

  private isBorderBlue(): boolean {
    return this.creationDate > this.currentDate ? true : false;
  }

  private changeBorderColor(color: string) {
    this.renderer2.setStyle(
      this.element.nativeElement,
      'border',
      `1px solid ${color}`
    );
  }
}
