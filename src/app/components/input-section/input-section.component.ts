import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss'],
})
export class InputSectionComponent implements OnInit, OnDestroy {
  public inputValue: string = '';
  private subscription: Subscription;

  @Output()
  public inputValueEvent = new EventEmitter<string>();

  constructor(private router: Router, private searchService: SearchService) {
    this.subscription = new Subscription();
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

  public inputHandler(value: string): void {
    this.searchService.searchInput$.next(value);
  }

  public addCourseHandler(): void {
    this.router.navigate(['courses/new']);
  }
}
