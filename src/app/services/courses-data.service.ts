import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../types/ICourse';
import { SERVER_URL } from '../common/config';
import { Observable } from 'rxjs';

@Injectable()
export class CoursesDataService {
  private coursesUrl: string = `${SERVER_URL}/courses`;

  constructor(private http: HttpClient) {}

  public getList(start: number, count: number): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.coursesUrl, {
      params: {
        start,
        count,
      },
    });
  }

  public getCourseById(id: number): Observable<ICourse> {
    const url = `${this.coursesUrl}/${id}`;
    return this.http.get<ICourse>(url);
  }

  public removeCourseById(id: number) {
    const url = `${this.coursesUrl}/${id}`;
    return this.http.delete(url);
  }

  public markCourseTopRated(course: ICourse): Observable<Object> {
    const url = `${this.coursesUrl}/${course.id}`;
    return this.http.put(url, {
      ...course,
      isTopRated: !course.isTopRated,
    });
  }

  public searchCourses(str: string): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${this.coursesUrl}?textFragment=${str}`);
  }

  public updateCourse(course: ICourse): void {
    const url = `${this.coursesUrl}/${course.id}`;
    this.http
      .put(url, {
        ...course,
      })
      .subscribe();
  }

  public createCourse(course: ICourse): void {
    this.http
      .post(this.coursesUrl, {
        ...course,
      })
      .subscribe();
  }
}
