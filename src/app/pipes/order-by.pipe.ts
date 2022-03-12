import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../types/ICourse';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(coursesArr: ICourse[]): ICourse[] {
    if (coursesArr.length > 1) {
      return coursesArr.sort((a, b) => b.creationDate - a.creationDate);
    } else {
      return coursesArr;
    }
  }
}
