import { Component, OnInit } from '@angular/core';
import { MyData } from '../my-data';

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

