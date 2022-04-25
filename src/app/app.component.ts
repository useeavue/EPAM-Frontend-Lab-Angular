import { Component, OnDestroy, OnInit } from '@angular/core';

import { debounceTime, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isLoading: boolean = false;
  private subscription: Subscription;

  constructor(
    public auth: AuthService,
    private spinnerService: SpinnerService
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.spinnerService.isLoading
      .pipe(debounceTime(50))
      .subscribe((value) => {
        this.isLoading = value;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
