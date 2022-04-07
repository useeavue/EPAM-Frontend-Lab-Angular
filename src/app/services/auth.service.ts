import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../types/IUser';
import { LocalStorageService } from './local-storage.service';
import { UsersDataService } from './users-data.service';

@Injectable()
export class AuthService {
  private userName: string = '';
  private users: IUser[] = this.usersDataService.getList();
  public isAuthenticated: boolean = false;

  constructor(
    private usersDataService: UsersDataService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    if (this.localStorageService.getItem()) {
      this.isAuthenticated = true;
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
    this.isAuthenticated = true;
    this.localStorageService.setItem(login);
    console.log('Logged In!');
    this.router.navigate(['']);
    return true;
  }

  public logOut(): void {
    this.isAuthenticated = false;
    this.userName = '';
    this.localStorageService.removeItem();
    console.log('Logged Out!');
    this.router.navigate(['/login']);
  }

  public getUserInfo(): string {
    return this.userName;
  }

  get isAuth() {
    return this.isAuthenticated;
  }
}
