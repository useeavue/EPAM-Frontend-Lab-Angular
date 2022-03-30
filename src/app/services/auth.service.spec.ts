import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';
import { UsersDataService } from './users-data.service';

describe('AuthService', () => {
  let authService: AuthService;
  let usersDataService;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    usersDataService = {
      getList: () => [
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
    };

    localStorageService = jasmine.createSpyObj('LocalStorageService', {
      getItem: () => '',
      setItem: () => {
        return;
      },
      removeItem: () => {
        return;
      },
    });

    authService = new AuthService(
      usersDataService as UsersDataService,
      localStorageService as LocalStorageService
    );
  });

  it('#constructor should call localStorageService.getItem method', () => {
    expect(localStorageService.getItem).toHaveBeenCalled();
  });

  it('#logIn should call localStorageService.setItem method', () => {
    authService.logIn('user', 'root');
    expect(localStorageService.setItem).toHaveBeenCalled();
  });

  it('#logIn should successfully login user with right username and password', () => {
    expect(authService.logIn('user', 'root')).toBeTrue();
  });

  it('#logOut should successfully logout user', () => {
    authService.logOut();
    expect(authService.isAuth).toBeFalse();
  });

  it('#logOut should call localStorageService.removeItem method', () => {
    authService.logOut();
    expect(localStorageService.removeItem).toHaveBeenCalled();
  });

  it('#logIn should not successfully login user with wrong username and password', () => {
    expect(authService.logIn('qweqwe', 'qweqwe')).toBeFalse();
  });
});
