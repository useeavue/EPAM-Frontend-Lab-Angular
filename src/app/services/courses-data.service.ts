import { ICourse } from '../types/ICourse';

export class CoursesDataService {
  private userCourses: ICourse[] = [
    {
      id: 1,
      title: 'video course',
      creationDate: Date.parse('Nov 10, 2022'),
      duration: 82,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
      topRated: false,
    },
    {
      id: 3,
      title: 'video course',
      creationDate: Date.parse('Mar 1, 2022'),
      duration: 94,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
      topRated: false,
    },
    {
      id: 2,
      title: 'video course',
      creationDate: Date.parse('Mar 11, 2022'),
      duration: 119,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
      topRated: false,
    },
    {
      id: 6,
      title: 'video course',
      creationDate: Date.parse('Dec 17, 2009'),
      duration: 15,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
      topRated: false,
    },
    {
      id: 5,
      title: 'video course',
      creationDate: Date.parse('Oct 10, 2011'),
      duration: 60,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
      topRated: false,
    },
    {
      id: 4,
      title: 'video course',
      creationDate: Date.parse('Sep 3, 2017'),
      duration: 120,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
      topRated: false,
    },
  ];

  public getList(): ICourse[] {
    return this.userCourses;
  }

  public getCourseById(id: number): ICourse | undefined {
    return this.userCourses.find((course) => course.id === id);
  }

  public removeCourseById(id: number): void {
    this.userCourses = this.userCourses.filter((course) => course.id !== id);
  }

  public markCourseTopRated(id: number): void {
    this.userCourses = this.userCourses.map((course) =>
      course.id === id
        ? {
            ...course,
            topRated: !course.topRated,
          }
        : course
    );
  }

  public filterCourses(str: string): ICourse[] {
    return this.userCourses.filter(
      (course) => course.title.indexOf(str.toLowerCase().trim()) > -1
    );
  }

  public updateItem(): void {}

  public createCourse(): void {}
}
