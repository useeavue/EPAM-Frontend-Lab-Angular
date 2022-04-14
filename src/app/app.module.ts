import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CoursesDataService } from './services/courses-data.service';
import { UsersDataService } from './services/users-data.service';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginPageComponent,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    CoursesDataService,
    UsersDataService,
    AuthService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
