import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hello-name',
  templateUrl: 'hello-name.component.html',
  styleUrls: ['hello-name.component.css']
})
export class HelloNameComponent implements OnInit {

  name: string;

  constructor() {
    this.name = 'Guy';
  }

  ngOnInit() {
  }

}
