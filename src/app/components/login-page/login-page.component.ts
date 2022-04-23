import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnDestroy {
  public userNameInput: string = '';
  public userPasswordInput: string = '';
  public isError: boolean = false;
  public errorMessage: string = 'Wrong username or password!';
  private subscription: Subscription = new Subscription();

  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public logIn(login: string, password: string): void {
    this.subscription.add(
      this.authService.logIn(login, password).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {
          this.isError = true;
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
