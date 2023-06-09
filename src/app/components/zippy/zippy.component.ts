import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Output() eventEmitter = new EventEmitter<boolean>();
  booleanValue = false;

  btnClick() {
    this.booleanValue = !this.booleanValue;
    this.eventEmitter.emit(this.booleanValue);
  }

}
