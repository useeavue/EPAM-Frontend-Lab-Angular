import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from '../types/ICourse';
import { SERVER_URL } from '../common/config';
import { Observable } from 'rxjs';

@Injectable()
export class CoursesDataService {
  private coursesUrl: string = `${SERVER_URL}/courses`;
  // private course: ICourse = {
  //   id: 0,
  //   name: '',
  //   date: '',
  //   length: 0,
  //   description: '',
  //   isTopRated: false,
  // };
  // private userCourses: ICourse[] = [
  //   {
  //     id: 1,
  //     name: 'video course',
  //     date: Date.parse('Nov 10, 2022'),
  //     length: 82,
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
  //     isTopRated: false,
  //   },
  //   {
  //     id: 3,
  //     name: 'video course',
  //     date: Date.parse('Mar 1, 2022'),
  //     length: 94,
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
  //     isTopRated: false,
  //   },
  //   {
  //     id: 2,
  //     name: 'video course',
  //     date: Date.parse('Mar 11, 2022'),
  //     length: 119,
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
  //     isTopRated: false,
  //   },
  //   {
  //     id: 6,
  //     name: 'video course',
  //     date: Date.parse('Dec 17, 2009'),
  //     length: 15,
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
  //     isTopRated: false,
  //   },
  //   {
  //     id: 5,
  //     name: 'video course',
  //     date: Date.parse('Oct 10, 2011'),
  //     length: 60,
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
  //     isTopRated: false,
  //   },
  //   {
  //     id: 4,
  //     name: 'video course',
  //     date: Date.parse('Sep 3, 2017'),
  //     length: 120,
  //     description:
  //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
  //     isTopRated: false,
  //   },
  // ];

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
      name: course.name.slice(course.name.indexOf(' ') + 1),
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
