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
    creationDate: '',
    duration: '',
    description: '',
  };

  constructor() {}

  @Output()
  public onClickEvent = new EventEmitter<number>();
  public clickHandler(clicked: number): void {
    this.onClickEvent.emit(clicked);
  }

  ngOnInit(): void {}
}
