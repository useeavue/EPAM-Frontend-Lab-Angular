import { TestBed } from '@angular/core/testing';

import { UsersDataService } from './users-data.service';

describe('UsersDataService', () => {
  let usersDataService: UsersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersDataService],
    });
    usersDataService = TestBed.inject(UsersDataService);
  });

  it('#getList should return list of users', () => {
    expect(usersDataService.getList()).toBe(usersDataService.users);
  });
});
