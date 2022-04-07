import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddUpdateCourseComponent } from './components/add-update-course/add-update-course.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'courses',
    component: CoursesPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/new',
    component: AddUpdateCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/:id',
    component: AddUpdateCourseComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
