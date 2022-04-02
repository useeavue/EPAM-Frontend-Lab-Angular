import { Component, EventEmitter, Output } from '@angular/core';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss'],
})
export class InputSectionComponent {
  public inputValue: string = '';

  constructor(public temp: TempService) {}

  @Output()
  public inputValueEvent = new EventEmitter<string>();

  public inputHandler(value: string): void {
    this.inputValueEvent.emit(value);
  }
}
