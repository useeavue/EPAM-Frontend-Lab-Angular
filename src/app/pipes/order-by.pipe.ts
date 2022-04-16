import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../types/ICourse';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(coursesArr: ICourse[]): ICourse[] {
    if (coursesArr.length > 1) {
      return coursesArr
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map((course, i) => ({
          ...course,
          name:
            course.name.indexOf(`${i + 1}`) > -1
              ? course.name
              : `${i + 1}. ${course.name}`,
        }));
    } else {
      return coursesArr;
    }
  }
}
