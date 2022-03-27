import { Injectable } from '@angular/core';
import { IUser } from '../types/IUser';
import { LocalStorageService } from './local-storage.service';
import { UsersDataService } from './users-data.service';

@Injectable()
export class AuthService {
  private userName: string = '';
  private users: IUser[] = this.usersDataService.getList();
  public isAuth: boolean = false;

  constructor(
    private usersDataService: UsersDataService,
    private localStorageService: LocalStorageService
  ) {
    if (this.localStorageService.getItem()) {
      this.isAuth = true;
      this.userName = this.localStorageService.getItem() || '';
    }
  }

  private findUser(
    users: IUser[],
    login: string,
    password: string
  ): IUser | undefined {
    return users.find(
      (user) => user.username === login && user.password === password
    );
  }

  public logIn(login: string, password: string): boolean {
    const user = this.findUser(this.users, login, password);
    if (!user) return false;
    this.userName = login;
    this.isAuth = true;
    this.localStorageService.setItem(login);
    console.log('Logged In!');
    return true;
  }

  public logOut(): void {
    this.isAuth = false;
    this.userName = '';
    this.localStorageService.removeItem();
    console.log('Logged Out!');
  }

  public getUserInfo(): string {
    return this.userName;
  }
}
