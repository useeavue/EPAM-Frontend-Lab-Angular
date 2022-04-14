import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss'],
})
export class InputSectionComponent {
  public inputValue: string = '';

  constructor(private router: Router) {}

  @Output()
  public inputValueEvent = new EventEmitter<string>();

  public inputHandler(value: string): void {
    this.inputValueEvent.emit(value);
  }

  public addCourseHandler(): void {
    this.router.navigate(['courses/new']);
  }
}
