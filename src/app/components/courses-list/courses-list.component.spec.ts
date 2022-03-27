import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderByPipe } from 'src/app/pipes/order-by.pipe';
import { ICourse } from 'src/app/types/ICourse';
import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let coursesMock: ICourse[] = [
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

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesListComponent, OrderByPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.courses = coursesMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should trigger click event when "load more" button is pressed which calls #loadMoreHandler', () => {
    const spy = spyOn(component, 'loadMoreHandler');
    fixture.debugElement
      .query(By.css('button'))
      .triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('#loadMoreHandler should log the message', () => {
    const consoleSpy = spyOn(console, 'log');
    component.loadMoreHandler();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
