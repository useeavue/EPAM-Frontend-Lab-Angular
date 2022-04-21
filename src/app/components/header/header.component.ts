import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userName: string = '';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userName$.subscribe((value) => {
      this.userName = value;
    });
  }
}
