import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdateCourseComponent } from './add-update-course.component';
import { AddUpdateCourseRoutingModule } from './add-update-course-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { AuthorsComponent } from '../authors/authors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddUpdateCourseRoutingModule,
    CustomPipesModule,
    BreadcrumbsModule,
    ReactiveFormsModule,
  ],
  declarations: [AddUpdateCourseComponent, AuthorsComponent],
})
export class AddUpdateCourseModule {}
