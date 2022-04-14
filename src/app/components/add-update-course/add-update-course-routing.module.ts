import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdateCourseComponent } from './add-update-course.component';

const routes: Routes = [
  {
    path: '',
    component: AddUpdateCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUpdateCourseRoutingModule {}
