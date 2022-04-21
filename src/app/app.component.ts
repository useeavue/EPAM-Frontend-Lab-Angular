import { trigger, transition, style, animate } from '@angular/animations';
import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { debounceTime } from 'rxjs';
import { AuthService } from './services/auth.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = 'ng-course';
  public isLoading: boolean = false;

  constructor(
    public auth: AuthService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.isLoading.pipe(debounceTime(50)).subscribe((value) => {
      this.isLoading = value;
    });
  }
}
