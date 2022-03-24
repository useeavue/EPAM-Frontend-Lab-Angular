import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UsersDataService } from './users-data.service';

describe('AuthService', () => {
  let authService: AuthService;
  let usersDataServiceSpy: jasmine.SpyObj<UsersDataService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UsersDataService', ['getList'], {
      users: [
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
      ],
    });

    TestBed.configureTestingModule({
      providers: [AuthService, { provide: UsersDataService, useValue: spy }],
    });

    authService = TestBed.inject(AuthService);
    usersDataServiceSpy = TestBed.inject(
      UsersDataService
    ) as jasmine.SpyObj<UsersDataService>;

    usersDataServiceSpy.getList.and.returnValue(usersDataServiceSpy.users);
    authService.users = usersDataServiceSpy.getList();
  });

  it('#logIn should successfully login user', () => {
    expect(authService.logIn('user', 'root')).toBeTrue();
  });

  it('#logOut should successfully logout user', () => {
    authService.logOut();

    expect(authService.isAuth).toBeFalse();
    expect(authService.getUserInfo()).toBe('');
  });

  it('#logIn should not successfully login user', () => {
    expect(authService.logIn('qweqwe', 'qweqwe')).toBeFalse();
  });
});
