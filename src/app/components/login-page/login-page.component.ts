import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnDestroy {
  public isError: boolean = false;
  public errorMessage: string;
  private subscription: Subscription;
  public formGroup: FormGroup;

  constructor(public authService: AuthService, private router: Router) {
    this.subscription = new Subscription();
    this.errorMessage = 'Wrong username or password!';
    this.formGroup = new FormGroup({
      userName: new FormControl('Warner', [Validators.required]),
      password: new FormControl('ea', [Validators.required]),
    });
  }

  public logIn(): void {
    const userName = this.formGroup.get('userName')?.value as string;
    const password = this.formGroup.get('password')?.value as string;
    this.subscription.add(
      this.authService.logIn(userName, password).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {
          this.isError = true;
        },
      })
    );
  }

  public isFieldInvalid(fieldName: string): boolean {
    return (this.formGroup.get(fieldName)?.invalid &&
      this.formGroup.get(fieldName)?.touched) as boolean;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
