import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import { ICourse } from 'src/app/types/ICourse';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  public searchString: string = '';
  public courseId: number = 0;
  public modal: boolean = false;
  public courses: ICourse[] = [];
  private amountOfCourses: number = 5;

  public loadMoreHandler(): void {
    this.amountOfCourses += 2;
    this.getCourses(this.amountOfCourses);
  }

  constructor(public coursesDataService: CoursesDataService) {}

  ngOnInit(): void {
    this.getCourses(this.amountOfCourses);
  }

  private getCourses(count: number): void {
    this.coursesDataService
      .getList(0, count)
      .subscribe((courses) => (this.courses = courses));
  }

  public closeModalDeleteCourse(): void {
    this.coursesDataService.removeCourseById(this.courseId).subscribe(() => {
      this.getCourses(this.amountOfCourses);
    });
    this.modal = false;
  }

  public markTopRated(course: ICourse) {
    this.coursesDataService
      .markCourseTopRated(course)
      .subscribe(() => this.getCourses(this.amountOfCourses));
  }

  public eventHandler(clicked: number): void {
    this.courseId = clicked;
    this.modal = true;
  }

  public changeSearchString(inputValue: string): void {
    this.searchString = inputValue;
  }

  public searchCourses(str: string) {
    str === ''
      ? this.getCourses(this.amountOfCourses)
      : this.coursesDataService.searchCourses(str).subscribe((courses) => {
          this.courses = courses;
        });
  }
}
