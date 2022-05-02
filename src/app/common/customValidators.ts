import { ValidationErrors, ValidatorFn } from '@angular/forms';
import { CourseAuthors } from '../types/ICourseAuthors';

export function authorsValidator(
  authors: CourseAuthors[] | undefined
): ValidatorFn {
  return (): ValidationErrors | null => {
    return authors!.length < 1 ? { authors: authors?.length } : null;
  };
}
