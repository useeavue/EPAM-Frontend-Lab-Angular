import { CoursesDataService } from './courses-data.service';

describe('CoursesDataService', () => {
  let coursesDataService: CoursesDataService;
  const mockUserCourses = [
    {
      id: 1,
      title: 'video course',
      creationDate: Date.parse('Nov 10, 2022'),
      duration: 82,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
    },
    {
      id: 3,
      title: 'video course',
      creationDate: Date.parse('Mar 1, 2022'),
      duration: 94,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
    },
    {
      id: 2,
      title: 'video course',
      creationDate: Date.parse('Mar 11, 2022'),
      duration: 119,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
    },
    {
      id: 6,
      title: 'video course',
      creationDate: Date.parse('Dec 17, 2009'),
      duration: 15,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
    },
    {
      id: 5,
      title: 'video course',
      creationDate: Date.parse('Oct 10, 2011'),
      duration: 60,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
    },
    {
      id: 4,
      title: 'video course',
      creationDate: Date.parse('Sep 3, 2017'),
      duration: 120,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic ipsunde a exercitationem voluptatibus labore fugiat autem ullam, atqueprovident tempora aliquam sunt saepe ab vitae nulla nemo veritatis nihilquisquam. Iusto ab numquam excepturi consequuntur dolor, deleniti ea!',
    },
  ];

  beforeEach(() => {
    coursesDataService = new CoursesDataService();
  });

  it('#getList should return list of courses', () => {
    expect(coursesDataService.getList()).toEqual(mockUserCourses);
  });

  it('#getItemById should return course object by given id', () => {
    expect(coursesDataService.getItemById(1)).toEqual(
      mockUserCourses.find((course) => course.id === 1)
    );
  });

  it('#removeItem should remove course object from the array by given id', () => {
    coursesDataService.removeItem(1);
    expect(
      coursesDataService.getList().some((course) => course.id === 1)
    ).toBeFalse();
  });

  it('#filterCourses called with wrong search string should return empty array', () => {
    expect(coursesDataService.filterCourses('asda')).toEqual([]);
  });

  it('#filterCourses called with empty search string should return initial array of courses', () => {
    expect(coursesDataService.filterCourses('')).toEqual(mockUserCourses);
  });

  it('#filterCourses called with "video" should return an array of courses that contain word "video" in the title', () => {
    expect(coursesDataService.filterCourses('video')).toEqual(
      mockUserCourses.filter((course) => course.title.indexOf('video') > -1)
    );
  });
});
