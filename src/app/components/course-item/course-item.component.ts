import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ICourse } from 'src/app/types/ICourse';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {
  @Input()
  public course: ICourse = {
    id: 0,
    name: '',
    date: '',
    length: 0,
    description: '',
    isTopRated: false,
  };

  @Input()
  public courseNumber: number = 0;

  get numberOfCourse() {
    return `${this.courseNumber + 1}.`;
  }

  @Output()
  public topRatedClicked = new EventEmitter<ICourse>();
  public topRatedHandle(): void {
    this.topRatedClicked.emit(this.course);
  }

  @Output()
  public deleteEvent = new EventEmitter<number>();
  public deleteHandler(): void {
    this.deleteEvent.emit(this.course.id);
    console.log(this.course.id);
  }
}
