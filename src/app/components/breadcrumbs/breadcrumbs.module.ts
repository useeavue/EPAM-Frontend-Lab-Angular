import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [RouterModule],
  declarations: [BreadcrumbsComponent],
  exports: [BreadcrumbsComponent],
})
export class BreadcrumbsModule {}
