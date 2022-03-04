import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss'],
})
export class InputSectionComponent implements OnInit {
  public inputValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  public inputHandler(value: string): void {
    console.log(value);
  }
}
