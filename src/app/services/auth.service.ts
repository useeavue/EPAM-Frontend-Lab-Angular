import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { SERVER_URL } from '../common/config';
import { AuthResponse } from '../types/IAuthResponse';
import { Observable, Subject, tap } from 'rxjs';
import { IUser } from '../types/IUser';

@Injectable()
export class AuthService {
  public userName$: Subject<string> = new Subject<string>();
  public errMessage: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private http: HttpClient
  ) {}

  public logIn(login: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${SERVER_URL}/auth/login`, {
        login,
        password,
      })
      .pipe(tap(this.setToken.bind(this)));
  }

  private setToken(response: AuthResponse) {
    this.localStorageService.setItem(response.token);
  }

  public getUserInfo(): Observable<IUser> {
    return this.http.post<IUser>(`${SERVER_URL}/auth/userinfo`, {}).pipe(
      tap({
        next: (user) => {
          const userName = `${user.name.first} ${user.name.last}`;
          this.userName$.next(userName);
        },
        error: () => {
          this.logOut();
        },
      })
    );
  }

  public logOut(): void {
    this.localStorageService.removeItem();
    this.userName$.next('');
    this.router.navigate(['/login']);
  }
}
