import { NgModule } from '@angular/core';
import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [OrderByPipe, DurationPipe],
  exports: [OrderByPipe, DurationPipe],
})
export class CustomPipesModule {}
