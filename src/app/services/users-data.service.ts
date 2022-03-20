import { Injectable } from '@angular/core';
import { IUser } from '../types/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  private users: IUser[] = [
    {
      id: 0,
      firstName: 'Maksim',
      lastName: 'Makarov',
      username: 'user',
      password: 'root',
    },
    {
      id: 1,
      firstName: 'Maksim1',
      lastName: 'Makarov1',
      username: 'user1',
      password: 'root',
    },
    {
      id: 2,
      firstName: 'Maksim2',
      lastName: 'Makarov2',
      username: 'user2',
      password: 'root',
    },
  ];

  public getList(): IUser[] {
    return this.users;
  }
}
