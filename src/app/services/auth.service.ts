import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { UsersDataService } from './users-data.service';
import { SERVER_URL } from '../common/config';

@Injectable()
export class AuthService {
  public isAuthenticated: boolean = false;
  public errMessage: boolean = false;

  constructor(
    private usersDataService: UsersDataService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private http: HttpClient
  ) {
    if (this.localStorageService.getItem()) {
      this.isAuthenticated = true;
    }
  }

  public logIn(login: string, password: string) {
    this.http
      .post(`${SERVER_URL}/auth/login`, {
        login,
        password,
      })
      .subscribe({
        next: (userData) => {
          this.localStorageService.setItem(JSON.stringify(userData));
          this.usersDataService.fetchUser();
          this.isAuthenticated = true;
          console.log('Logged In!');
          this.router.navigate(['']);
        },
        error: () => {
          this.errMessage = true;
        },
      });
  }

  public logOut(): void {
    this.isAuthenticated = false;
    this.localStorageService.removeItem();
    console.log('Logged Out!');
    this.router.navigate(['/login']);
  }

  get isAuth() {
    return this.isAuthenticated;
  }

  get isErr() {
    return this.errMessage;
  }
}
