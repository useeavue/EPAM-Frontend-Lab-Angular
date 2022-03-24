import { TestBed } from '@angular/core/testing';

import { CoursesDataService } from './courses-data.service';

describe('UsersDataService', () => {
  let coursesDataService: CoursesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesDataService],
    });
    coursesDataService = TestBed.inject(CoursesDataService);
  });

  it('#getList should return list of courses', () => {
    expect(coursesDataService.getList()).toBe(coursesDataService.userCourses);
  });

  it('#getItemById should return course object by given id', () => {
    expect(coursesDataService.getItemById(1)).toBe(
      coursesDataService.userCourses[0]
    );
  });

  it('#removeItem should remove course object from the array by given id', () => {
    expect(coursesDataService.userCourses.length).toBe(6);
    coursesDataService.removeItem(1);
    expect(coursesDataService.userCourses.length).toBe(5);
  });

  it('#filterCourses should return empty array', () => {
    expect(coursesDataService.filterCourses('asda')).toEqual([]);
  });

  it('#filterCourses should return initial array of courses', () => {
    expect(coursesDataService.filterCourses('')).toEqual(
      coursesDataService.userCourses
    );
  });

  it('#filterCourses should return array of courses that contain word "video" in the title', () => {
    expect(coursesDataService.filterCourses('video')).toEqual(
      coursesDataService.userCourses
    );
  });
});
