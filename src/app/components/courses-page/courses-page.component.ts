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

  constructor() {}

  ngOnInit(): void {
    this.courses = usersCourse;
  }

  public btnEventHandler(eventValue: number): void {
    console.log(eventValue);
  }
}
