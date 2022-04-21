import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnDestroy {
  public userNameInput: string = '';
  public userPasswordInput: string = '';
  public errMessage: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(public authService: AuthService, private router: Router) {}

  public logIn(login: string, password: string): void {
    this.subscription = this.authService.logIn(login, password).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: () => {
        this.errMessage = true;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
