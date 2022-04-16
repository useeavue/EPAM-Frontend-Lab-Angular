import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public userNameInput: string = '';
  public userPasswordInput: string = '';

  constructor(public authService: AuthService) {}

  public logIn(login: string, password: string): void {
    this.authService.logIn(login, password);
  }
}
