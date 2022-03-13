import { Component, OnInit } from '@angular/core';
import { usersCourse } from 'src/app/common/mock-users';
import { ICourse } from 'src/app/types/ICourse';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  public courses: ICourse[] = [];
  public searchString: string = '';

  ngOnInit(): void {
    this.courses = usersCourse;
  }

  public filterCourses(): ICourse[] {
    return this.courses.filter(
      (course) =>
        course.title.indexOf(this.searchString.toLowerCase().trim()) > -1
    );
  }

  public changeSearchString(inputValue: string): void {
    this.searchString = inputValue;
  }

  public btnCloseEventHandler(clickedId: number): void {
    console.log(clickedId);
  }
}
