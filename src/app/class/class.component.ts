import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-class',
  templateUrl: 'class.component.html',
  styleUrls: ['class.component.css']
})
export class ClassComponent implements OnInit {

  isBordered: boolean;
  classObj: any;
  classList: any[];

  constructor() {
    this.isBordered = true;
    this.classObj = {
      bordered: this.isBordered
    };
    this.classList = ['bordered', 'red'];
  }

  ngOnInit() {
  }

}
