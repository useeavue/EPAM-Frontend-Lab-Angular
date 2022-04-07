import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesDataService } from 'src/app/services/courses-data.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  providers: [TitleCasePipe],
})
export class BreadcrumbsComponent implements OnInit {
  public title: string = '';
  public courseId: number = 0;

  constructor(
    private coursesDataService: CoursesDataService,
    private titleCasePipe: TitleCasePipe,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    const course = this.coursesDataService.getCourseById(id);

    course?.id ? (this.courseId = course.id) : (this.courseId = 0);
    course?.title
      ? (this.title = this.titleCasePipe.transform(course.title))
      : (this.title = '');
  }
}
