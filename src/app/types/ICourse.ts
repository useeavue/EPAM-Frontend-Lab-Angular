import { CourseAuthors } from './ICourseAuthors';

export interface ICourse {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  authors?: CourseAuthors[];
}
