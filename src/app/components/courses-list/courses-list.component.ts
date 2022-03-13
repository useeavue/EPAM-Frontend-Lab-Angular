import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from 'src/app/types/ICourse';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input()
  public courses: ICourse[] = [];

  public loadMoreHandler(): void {
    console.log('Load more');
  }

  @Output()
  public btnCloseClicked = new EventEmitter<number>();

  public eventHandler(clicked: number): void {
    this.btnCloseClicked.emit(clicked);
  }
}
