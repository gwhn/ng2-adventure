import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'data-model',
  templateUrl: 'data-model.component.html',
  styleUrls: ['data-model.component.css']
})
export class DataModelComponent implements OnInit {

  myData: MyData;

  constructor() {
    this.myData = new MyData(1, 'something');
  }

  ngOnInit() {
  }

}

/**
 * MyData
 */
class MyData {
  constructor(public id: number, public text: string, public optional?: string) {
    this.optional = optional || 'default';
  }
}