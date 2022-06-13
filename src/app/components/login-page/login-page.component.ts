import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { OnDestroyService } from 'src/app/services/on-destroy.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [OnDestroyService],
})
export class LoginPageComponent {
  public isError: boolean = false;
  public errorMessage: string;
  public formGroup: FormGroup;

  constructor(
    public authService: AuthService,
    private router: Router,
    private destroy$: OnDestroyService
  ) {
    this.errorMessage = 'Wrong username or password!';
    this.formGroup = new FormGroup({
      userName: new FormControl('Warner', [Validators.required]),
      password: new FormControl('ea', [Validators.required]),
    });
  }

  public logIn(): void {
    const userName = this.formGroup.get('userName')?.value as string;
    const password = this.formGroup.get('password')?.value as string;

    this.authService
      .logIn(userName, password)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {
          this.isError = true;
        },
      });
  }

  public isFieldInvalid(fieldName: string): boolean {
    return (
      !!this.formGroup.get(fieldName)?.invalid &&
      !!this.formGroup.get(fieldName)?.touched
    );
  }
}
