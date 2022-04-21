import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../types/IUser';
import { SERVER_URL } from '../common/config';
import { LocalStorageService } from './local-storage.service';
import { Observable, of, Subject, tap } from 'rxjs';

@Injectable()
export class UsersDataService {
  private user: IUser = {
    id: 0,
    name: {
      first: '',
      last: '',
    },
    login: '',
    password: '',
  };

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    // this.fetchUser();
  }

  get userName() {
    return `${this.user.name.first} ${this.user.name.last}`;
  }

  get currentUser() {
    return this.user;
  }

  public fetchUser(): Observable<IUser> {
    return this.http.post<IUser>(`${SERVER_URL}/auth/userinfo`, {});
  }
}
