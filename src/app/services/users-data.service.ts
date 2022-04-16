import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../types/IUser';
import { SERVER_URL } from '../common/config';
import { LocalStorageService } from './local-storage.service';

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
    this.fetchUser();
  }

  get userName() {
    return `${this.user.name.first} ${this.user.name.last}`;
  }

  public fetchUser(): boolean {
    if (this.localStorageService.getItem()) {
      const userStr: string = JSON.stringify(
        this.localStorageService.getItem()
      );
      const userObj = JSON.parse(JSON.parse(userStr));
      this.http
        .get<IUser>(`${SERVER_URL}/users/${userObj['id']}`)
        .subscribe((user) => {
          this.user = user;
        });
      return true;
    } else {
      return false;
    }
  }
}
