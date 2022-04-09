import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/courses-page/courses-page.module').then(
        (m) => m.CoursesPageModule
      ),
  },
  {
    path: 'courses/new',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/add-update-course/add-update-course.module').then(
        (m) => m.AddUpdateCourseModule
      ),
  },
  {
    path: 'courses/:id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/add-update-course/add-update-course.module').then(
        (m) => m.AddUpdateCourseModule
      ),
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
