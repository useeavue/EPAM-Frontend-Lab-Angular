import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import { ICourse } from '../../types/ICourse';
import { randomInt } from 'src/app/common/numbers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-update-course',
  templateUrl: './add-update-course.component.html',
  styleUrls: ['./add-update-course.component.scss'],
  providers: [DatePipe, TitleCasePipe],
})
export class AddUpdateCourseComponent implements OnInit, OnDestroy {
  private courseId: number;
  public date: string | null = '';
  public authorsInput: string = '';
  public authors: Array<any> = [];
  public heading: string = 'Add';
  private subscription: Subscription;
  public course: ICourse;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesDataService: CoursesDataService,
    private datePipe: DatePipe,
    private titleCasePipe: TitleCasePipe
  ) {
    this.course = {
      id: 0,
      name: '',
      date: '',
      length: 0,
      description: '',
      isTopRated: false,
    };
    this.courseId = +this.activatedRoute.snapshot.params['id'] || 0;
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    if (this.courseId) {
      this.subscription.add(
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
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private returnHome(): void {
    this.router.navigate(['']);
  }

  public save(): void {
    if (this.courseId) {
      this.subscription.add(
        this.coursesDataService
          .updateCourse({
            ...this.course,
            date: this.date ? new Date(this.date).toISOString() : '',
          })
          .subscribe(() => this.returnHome())
      );
    } else {
      this.subscription.add(
        this.coursesDataService
          .createCourse({
            ...this.course,
            id: randomInt(10000, 15000),
            date: this.date ? new Date(this.date).toISOString() : '',
          })
          .subscribe(() => this.returnHome())
      );
    }
  }
  public close(): void {
    this.returnHome();
  }
}
