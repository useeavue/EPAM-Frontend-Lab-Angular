import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdateCourseComponent } from './add-update-course.component';
import { AddUpdateCourseRoutingModule } from './add-update-course-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddUpdateCourseRoutingModule,
    CustomPipesModule,
    BreadcrumbsModule,
  ],
  declarations: [AddUpdateCourseComponent],
})
export class AddUpdateCourseModule {}
