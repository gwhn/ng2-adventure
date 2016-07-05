import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hello-list',
  templateUrl: 'hello-list.component.html',
  styleUrls: ['hello-list.component.css']
})
export class HelloListComponent implements OnInit {

  list: string[];

  constructor() {
    this.list = ['Guy', 'Charles', 'Alex', 'Mary'];
  }

  ngOnInit() {
  }

}
