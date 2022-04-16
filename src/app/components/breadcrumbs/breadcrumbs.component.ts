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
  private title: string = '';

  constructor(
    private coursesDataService: CoursesDataService,
    private titleCasePipe: TitleCasePipe,
    private activatedRoute: ActivatedRoute
  ) {}

  get titleTemplate() {
    return this.title ? `/${this.title}` : '';
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id']) {
      const id = +this.activatedRoute.snapshot.params['id'];
      this.coursesDataService.getCourseById(id).subscribe((course) => {
        this.title = this.titleCasePipe.transform(course.name);
      });
    }
  }
}
