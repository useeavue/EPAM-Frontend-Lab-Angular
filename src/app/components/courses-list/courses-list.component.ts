import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import { OnDestroyService } from 'src/app/services/on-destroy.service';
import { ICourse } from 'src/app/types/ICourse';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [OnDestroyService],
})
export class CoursesListComponent implements OnInit {
  public courseId: number = 0;
  public modal: boolean = false;
  public courses: ICourse[] = [];
  private coursesStartIndex: number = 0;
  private amountOfCourses: number = 5;

  public loadMoreHandler(): void {
    this.amountOfCourses += 2;
    this.getCourses();
  }

  constructor(
    public coursesDataService: CoursesDataService,
    private destroy$: OnDestroyService
  ) {}

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.coursesDataService
      .getList(this.coursesStartIndex, this.amountOfCourses)
      .pipe(takeUntil(this.destroy$))
      .subscribe((courses) => {
        this.courses = courses;
      });
  }

  public closeModalDeleteCourse(): void {
    this.coursesDataService
      .removeCourseById(this.courseId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getCourses();
      });

    this.modal = false;
  }

  public markTopRated(course: ICourse) {
    this.coursesDataService
      .markCourseTopRated(course)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.getCourses());
  }

  public eventHandler(clicked: number): void {
    this.courseId = clicked;
    this.modal = true;
  }

  public handleSearch(str: string) {
    str.trim() === ''
      ? this.getCourses()
      : this.coursesDataService
          .searchCourses(str)
          .pipe(takeUntil(this.destroy$))
          .subscribe((courses) => {
            this.courses = courses;
          });
  }
}
