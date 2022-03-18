import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent {
  @Output()
  public close = new EventEmitter();
  @Output()
  public confirm = new EventEmitter();
}
