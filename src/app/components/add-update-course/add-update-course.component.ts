import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDataService } from 'src/app/services/courses-data.service';
import { randomInt } from 'src/app/common/numbers';
import { takeUntil } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseAuthors } from 'src/app/types/ICourseAuthors';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { OnDestroyService } from 'src/app/services/on-destroy.service';

@Component({
  selector: 'app-add-update-course',
  templateUrl: './add-update-course.component.html',
  styleUrls: ['./add-update-course.component.scss'],
  providers: [DatePipe, TitleCasePipe, OnDestroyService],
})
export class AddUpdateCourseComponent implements OnInit {
  private courseId: number;
  public heading: string = 'Add';
  public formGroup: FormGroup;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesDataService: CoursesDataService,
    private destroy$: OnDestroyService,
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
  }

  ngOnInit(): void {
    if (this.courseId) {
      this.coursesDataService
        .getCourseById(this.courseId)
        .pipe(takeUntil(this.destroy$))
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
        });
    }
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
      this.coursesDataService
        .updateCourse({
          ...course,
          id: this.courseId,
        })
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.returnHome());
    } else {
      this.coursesDataService
        .createCourse({
          ...course,
          id: randomInt(10000, 15000),
        })
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.returnHome());
    }
  }
  public close(): void {
    this.returnHome();
  }
}
