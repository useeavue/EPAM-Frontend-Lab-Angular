import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdateCourseComponent } from './add-update-course.component';
import { AddUpdateCourseRoutingModule } from './add-update-course-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { AuthorsComponent } from '../authors/authors.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddUpdateCourseRoutingModule,
    CustomPipesModule,
    BreadcrumbsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  declarations: [AddUpdateCourseComponent, AuthorsComponent],
})
export class AddUpdateCourseModule {}
