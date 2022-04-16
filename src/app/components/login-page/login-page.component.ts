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
  public errMessage: boolean = false;

  constructor(private auth: AuthService) {}

  public logIn(login: string, password: string): void {
    this.auth.logIn(login, password);
  }
}
