import { Component, OnInit, EventEmitter } from '@angular/core';
import { MyData } from '../my-data';

@Component({
  moduleId: module.id,
  selector: 'form-data',
  templateUrl: 'form-data.component.html',
  styleUrls: ['form-data.component.css'],
  outputs: ['newData']
})
export class FormDataComponent implements OnInit {

  newData: EventEmitter<MyData>;

  constructor() {
    this.newData = new EventEmitter<MyData>();
  }

  ngOnInit() {
  }

  add(id: HTMLInputElement, text: HTMLInputElement, optional: HTMLInputElement): void {
    this.newData.emit(new MyData(parseInt(id.value, 10), text.value, optional.value));
  }
}
