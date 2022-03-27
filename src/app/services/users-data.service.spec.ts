import { UsersDataService } from './users-data.service';

describe('UsersDataService', () => {
  let usersDataService: UsersDataService;
  const mockUsers = [
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

  beforeEach(() => {
    usersDataService = new UsersDataService();
  });

  it('#getList should return list of users', () => {
    expect(usersDataService.getList()).toEqual(mockUsers);
  });
});
