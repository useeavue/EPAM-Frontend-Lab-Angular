import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss'],
})
export class InputSectionComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public formGroup: FormGroup;

  @Output()
  public inputValueEvent = new EventEmitter<string>();

  constructor(private router: Router, private searchService: SearchService) {
    this.subscription = new Subscription();
    this.formGroup = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.subscription.add(
      this.searchService.searchValue.subscribe((value) => {
        this.inputValueEvent.emit(value);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public inputHandler(): void {
    const searchString = this.formGroup.get('search')?.value as string;
    this.searchService.searchInput$.next(searchString);
  }

  public addCourseHandler(): void {
    this.router.navigate(['courses/new']);
  }
}
