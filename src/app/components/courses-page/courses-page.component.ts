import { Component, HostListener, OnInit } from '@angular/core';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import { ICourse } from 'src/app/types/ICourse';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = [];
  public searchString: string = '';
  public courseId: number = 0;
  public modal: boolean = false;

  constructor(public coursesData: CoursesDataService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.courses = this.coursesData.getList();
  }

  public changeSearchString(inputValue: string): void {
    this.searchString = inputValue;
  }

  public closeModalRefreshView(): void {
    this.getCourses();
    this.modal = false;
  }

  public btnCloseEventHandler(clickedId: number): void {
    this.courseId = clickedId;
    this.modal = true;
  }
}
