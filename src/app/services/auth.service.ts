import { Injectable } from '@angular/core';
import { IUser } from '../types/IUser';
import { UsersDataService } from './users-data.service';

@Injectable()
export class AuthService {
  private userName: string = '';
  private users: IUser[] = this.usersData.getList();
  public isAuth: boolean = false;

  constructor(private usersData: UsersDataService) {
    if (localStorage.getItem('user')) {
      this.isAuth = true;
      this.userName = localStorage.getItem('user') || '';
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

  public logIn(login: string, password: string): void | boolean {
    const user = this.findUser(this.users, login, password);
    if (!user) return;
    this.userName = login;
    this.isAuth = true;
    localStorage.setItem('user', login);
    console.log('Logged In!');
  }

  public logOut(): void {
    this.isAuth = false;
    this.userName = '';
    localStorage.removeItem('user');
    console.log('Logged Out!');
  }

  public getUserInfo(): string {
    return this.userName;
  }
}
