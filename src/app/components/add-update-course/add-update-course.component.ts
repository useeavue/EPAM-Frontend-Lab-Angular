import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import { randomInt } from 'src/app/common/numbers';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseAuthors } from 'src/app/types/ICourseAuthors';

@Component({
  selector: 'app-add-update-course',
  templateUrl: './add-update-course.component.html',
  styleUrls: ['./add-update-course.component.scss'],
  providers: [DatePipe, TitleCasePipe],
})
export class AddUpdateCourseComponent implements OnInit, OnDestroy {
  private courseId: number;
  public authors: CourseAuthors[] | undefined = [];
  public heading: string = 'Add';
  private subscription: Subscription;
  public formGroup: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesDataService: CoursesDataService,
    private datePipe: DatePipe,
    private titleCasePipe: TitleCasePipe
  ) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      date: new FormControl('', [Validators.required]),
      length: new FormControl(0, [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      authors: new FormControl(''),
    });

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
            this.authors = course.authors;
            this.formGroup.setValue({
              name: this.titleCasePipe.transform(course.name),
              date: this.datePipe.transform(course.date, 'yyyy-MM-dd'),
              length: course.length,
              description: course.description,
              authors: '',
            });
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public isAuthorsInvalid(): boolean {
    return this.formGroup.get('authors')?.touched && this.authors!.length < 1
      ? true
      : false;
  }

  public isFieldInvalid(fieldName: string): boolean {
    return this.formGroup.get(fieldName)?.invalid &&
      this.formGroup.get(fieldName)?.touched
      ? true
      : false;
  }

  public addAuthor(input: HTMLInputElement) {
    const userNameArr: string[] = input.value.split(/[ ,]+/);
    const author: CourseAuthors = {
      id: randomInt(10000, 15000),
      firstName: userNameArr[0],
      lastName: userNameArr[1] || '',
    };
    this.authors?.push(author);
    input.value = '';
    input.blur();
  }

  public removeAuthor(id: number): void {
    this.authors = this.authors?.filter((author) => author.id !== id);
  }

  private returnHome(): void {
    this.router.navigate(['']);
  }

  public save(): void {
    if (this.courseId) {
      this.subscription.add(
        this.coursesDataService
          .updateCourse({
            ...this.formGroup.value,
            id: this.courseId,
            authors: this.authors,
          })
          .subscribe(() => this.returnHome())
      );
    } else {
      this.subscription.add(
        this.coursesDataService
          .createCourse({
            ...this.formGroup.value,
            id: randomInt(10000, 15000),
            authors: this.authors,
          })
          .subscribe(() => this.returnHome())
      );
    }
    console.log(this.formGroup.value);
  }
  public close(): void {
    this.returnHome();
  }
}
