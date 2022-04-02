import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TempService } from './services/temp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'ng-course';
  constructor(public auth: AuthService, public temp: TempService) {}
}
