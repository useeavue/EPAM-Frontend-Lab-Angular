import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    public usersDataService: UsersDataService
  ) {}
}
