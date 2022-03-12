import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/types/ICourse';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input()
  public course: ICourse = {
    id: 0,
    title: '',
    creationDate: 0,
    duration: 0,
    description: '',
  };

  public topRated: boolean = false;

  constructor() {}

  public topRatedHandle(): void {
    this.topRated = !this.topRated;
  }

  @Output()
  public onClickEvent = new EventEmitter<number>();
  public clickHandler(clicked: number): void {
    this.onClickEvent.emit(clicked);
  }

  ngOnInit(): void {}
}
