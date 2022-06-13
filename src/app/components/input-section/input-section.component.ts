import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { OnDestroyService } from 'src/app/services/on-destroy.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss'],
  providers: [OnDestroyService],
})
export class InputSectionComponent implements OnInit {
  public formGroup: FormGroup;

  @Output()
  public inputValueEvent = new EventEmitter<string>();

  constructor(
    private router: Router,
    private searchService: SearchService,
    private destroy$: OnDestroyService
  ) {
    this.formGroup = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.searchService.searchValue
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.inputValueEvent.emit(value);
      });
  }

  public inputHandler(): void {
    const searchString = this.formGroup.get('search')?.value as string;
    this.searchService.searchInput$.next(searchString);
  }

  public addCourseHandler(): void {
    this.router.navigate(['courses/new']);
  }
}
