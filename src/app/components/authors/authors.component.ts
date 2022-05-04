import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CourseAuthors } from 'src/app/types/ICourseAuthors';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsComponent implements OnInit {
  @Input()
  public author: CourseAuthors;

  @Output()
  private removeAuthorEvent = new EventEmitter<number>();

  constructor(private titleCasePipe: TitleCasePipe) {
    this.author = {
      id: 0,
      firstName: '',
      lastName: '',
    };
  }

  get authorName() {
    return this.titleCasePipe.transform(
      `${this.author.firstName} ${this.author.lastName}`
    );
  }

  public removeAuthorHandler(id: number) {
    this.removeAuthorEvent.emit(id);
  }

  ngOnInit(): void {}
}
