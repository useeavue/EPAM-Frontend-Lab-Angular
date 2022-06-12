import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import { randomInt } from 'src/app/common/numbers';
import { Subscription } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseAuthors } from 'src/app/types/ICourseAuthors';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';

@Component({
  selector: 'app-add-update-course',
  templateUrl: './add-update-course.component.html',
  styleUrls: ['./add-update-course.component.scss'],
  providers: [DatePipe, TitleCasePipe],
})
export class AddUpdateCourseComponent implements OnInit, OnDestroy {
  private courseId: number;
  public heading: string = 'Add';
  private subscription: Subscription;
  public formGroup: FormGroup;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

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
      authorsInput: new FormControl(''),
      authors: new FormArray([], [Validators.required]),
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
            this.formGroup.setValue({
              name: this.titleCasePipe.transform(course.name),
              date: this.datePipe.transform(course.date, 'yyyy-MM-dd'),
              length: course.length,
              description: course.description,
              authorsInput: '',
              authors: [],
            });
            course.authors?.forEach((author) => {
              this.authorControls.push(new FormControl(author));
            });
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get authorControls() {
    return this.formGroup.get('authors') as FormArray;
  }

  private isAuthorsInvalid(): boolean {
    return (
      !!this.formGroup.get('authorsInput')?.touched &&
      !!this.formGroup.get('authors')?.invalid
    );
  }

  public checkAuthorsState(chipList: MatChipList): void {
    this.isAuthorsInvalid()
      ? (chipList.errorState = true)
      : (chipList.errorState = false);
  }

  public isFieldInvalid(fieldName: string): boolean {
    return (
      !!this.formGroup.get(fieldName)?.invalid &&
      !!this.formGroup.get(fieldName)?.touched
    );
  }

  public addAuthor(event: MatChipInputEvent) {
    if (!event.value) return;
    const userNameArr: string[] = event.value.split(/[ ,]+/);
    const author: CourseAuthors = {
      id: randomInt(10000, 15000),
      firstName: userNameArr[0],
      lastName: userNameArr[1] || '',
    };
    this.authorControls.push(new FormControl(author));
    event.chipInput!.clear();
  }

  public removeAuthor(id: number): void {
    const controlToDelete = this.authorControls.controls.findIndex(
      (control) => control.value.id === id
    );
    this.authorControls.removeAt(controlToDelete);
  }

  private returnHome(): void {
    this.router.navigate(['']);
  }

  public save(): void {
    const { authorsInput, ...course } = this.formGroup.value;
    if (this.courseId) {
      this.subscription.add(
        this.coursesDataService
          .updateCourse({
            ...course,
            id: this.courseId,
          })
          .subscribe(() => this.returnHome())
      );
    } else {
      this.subscription.add(
        this.coursesDataService
          .createCourse({
            ...course,
            id: randomInt(10000, 15000),
          })
          .subscribe(() => this.returnHome())
      );
    }
  }
  public close(): void {
    this.returnHome();
  }
}
