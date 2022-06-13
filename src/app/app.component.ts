import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { AuthService } from './services/auth.service';
import { OnDestroyService } from './services/on-destroy.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OnDestroyService],
})
export class AppComponent implements OnInit {
  public isLoading: boolean = false;
  constructor(
    public auth: AuthService,
    public spinnerService: SpinnerService,
    private destroy$: OnDestroyService
  ) {}

  ngOnInit(): void {
    this.spinnerService.isLoading$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        this.isLoading = value;
      });
  }
}
