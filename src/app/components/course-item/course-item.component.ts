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
    title: '',
    creationDate: 0,
    duration: 0,
    description: '',
    topRated: false,
  };

  @Output()
  public topRatedClicked = new EventEmitter<number>();
  public topRatedHandle(): void {
    this.topRatedClicked.emit(this.course.id);
  }

  @Output()
  public deleteEvent = new EventEmitter<number>();
  public deleteHandler(): void {
    this.deleteEvent.emit(this.course.id);
  }
}
