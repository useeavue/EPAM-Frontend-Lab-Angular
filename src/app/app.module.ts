import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { InputSectionComponent } from './components/input-section/input-section.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseItemBorderDirective } from './directives/course-item-border.directive';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { CoursesDataService } from './services/courses-data.service';
import { UsersDataService } from './services/users-data.service';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    InputSectionComponent,
    CoursesListComponent,
    CourseItemComponent,
    CourseItemBorderDirective,
    CoursesPageComponent,
    OrderByPipe,
    DurationPipe,
    LoginPageComponent,
    ModalWindowComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    CoursesDataService,
    UsersDataService,
    AuthService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
