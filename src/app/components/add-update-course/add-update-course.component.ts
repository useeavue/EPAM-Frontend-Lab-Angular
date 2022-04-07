import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDataService } from 'src/app/services/courses-data.service';

@Component({
  selector: 'app-add-update-course',
  templateUrl: './add-update-course.component.html',
  styleUrls: ['./add-update-course.component.scss'],
  providers: [DatePipe, TitleCasePipe],
})
export class AddUpdateCourseComponent implements OnInit {
  public duration: string = '';
  public title: string = '';
  public description: string = '';
  public date: string | null = '';
  public authorsInput: string = '';
  public authors: string[] = [];
  public heading: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesData: CoursesDataService,
    private datePipe: DatePipe,
    private titleCasePipe: TitleCasePipe
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    const course = this.coursesData.getCourseById(id);

    course?.title
      ? (this.title = this.titleCasePipe.transform(course.title))
      : (this.title = '');
    course?.description
      ? (this.description = course.description)
      : (this.description = '');
    course?.duration
      ? (this.duration = course.duration.toString())
      : (this.duration = '');
    course?.creationDate
      ? (this.date = this.datePipe.transform(course.creationDate, 'yyyy-MM-dd'))
      : (this.date = '');

    this.activatedRoute.snapshot.params['id']
      ? (this.heading = 'Edit')
      : (this.heading = 'Add');
  }

  private returnHome(): void {
    this.router.navigate(['']);
  }

  public save(): void {
    console.log('saved!');
    this.returnHome();
  }
  public close(): void {
    console.log('closed!');
    this.returnHome();
  }
}
