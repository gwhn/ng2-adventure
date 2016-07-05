import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'data-model',
  templateUrl: 'data-model.component.html',
  styleUrls: ['data-model.component.css'],
  inputs: ['myData']
})
export class DataModelComponent implements OnInit {

  myData: MyData;

  constructor() {}

  ngOnInit() {
  }

}

/**
 * MyData
 */
export class MyData {
  constructor(public id: number, public text: string, public optional?: string) {
    this.optional = optional || 'default';
  }
}