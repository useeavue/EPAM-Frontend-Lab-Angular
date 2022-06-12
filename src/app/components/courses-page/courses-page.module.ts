import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CourseItemBorderDirective } from 'src/app/directives/course-item-border.directive';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { InputSectionComponent } from '../input-section/input-section.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesPageRoutingModule,
    CustomPipesModule,
    BreadcrumbsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    InputSectionComponent,
    CoursesListComponent,
    CourseItemComponent,
    CourseItemBorderDirective,
    CoursesPageComponent,
    ModalWindowComponent,
  ],
})
export class CoursesPageModule {}
