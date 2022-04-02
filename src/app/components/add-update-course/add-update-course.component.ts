import { Component } from '@angular/core';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-add-update-course',
  templateUrl: './add-update-course.component.html',
  styleUrls: ['./add-update-course.component.scss'],
})
export class AddUpdateCourseComponent {
  public durationNum: number = 0;
  public title: string = '';
  public description: string = '';
  public date: string = '';
  public authorsInput: string = '';
  public authors: string[] = [];

  constructor(public temp: TempService) {}

  set duration(duration: string) {
    this.durationNum = Number(duration);
  }

  public save() {
    console.log('saved!');
  }
  public close() {
    console.log('closed!');
  }
}
