import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import { ICourse } from '../../types/ICourse';
import { randomInt } from 'src/app/common/numbers';

@Component({
  selector: 'app-add-update-course',
  templateUrl: './add-update-course.component.html',
  styleUrls: ['./add-update-course.component.scss'],
  providers: [DatePipe, TitleCasePipe],
})
export class AddUpdateCourseComponent implements OnInit {
  private courseId: number = +this.activatedRoute.snapshot.params['id'] || 0;
  public date: string | null = '';
  public authorsInput: string = '';
  public authors: Array<any> = [];
  public heading: string = '';
  public course: ICourse = {
    id: 0,
    name: '',
    date: '',
    length: 0,
    description: '',
    isTopRated: false,
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesDataService: CoursesDataService,
    private datePipe: DatePipe,
    private titleCasePipe: TitleCasePipe
  ) {}

  ngOnInit(): void {
    if (this.courseId) {
      this.coursesDataService
        .getCourseById(this.courseId)
        .subscribe((course) => {
          this.heading = 'Edit';
          this.course.id = course.id;
          this.course.name = this.titleCasePipe.transform(course.name);
          this.course.description = course.description;
          this.course.length = course.length;
          this.course.date = course.date;
          this.date = this.datePipe.transform(course.date, 'yyyy-MM-dd');
        });
    } else {
      this.heading = 'Add';
    }
  }

  private returnHome(): void {
    this.router.navigate(['']);
  }

  public save(): void {
    if (this.courseId) {
      this.coursesDataService.updateCourse({
        ...this.course,
        date: this.date ? new Date(this.date).toISOString() : '',
      });
    } else {
      this.coursesDataService.createCourse({
        ...this.course,
        id: randomInt(10000, 15000),
        date: this.date ? new Date(this.date).toISOString() : '',
      });
    }

    this.returnHome();
  }
  public close(): void {
    this.returnHome();
  }
}
