import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICourse } from 'src/app/types/ICourse';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  @Input()
  public courses: ICourse[] = [];

  constructor() {}

  public loadMoreHandler(): void {
    console.log('Load more');
  }

  @Output()
  public btnClicked = new EventEmitter<number>();

  public eventHandler(clicked: number): void {
    this.btnClicked.emit(clicked);
  }

  ngOnInit(): void {}
}
