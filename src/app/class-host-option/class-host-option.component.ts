import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'class-host-option',
  templateUrl: 'class-host-option.component.html',
  styleUrls: ['class-host-option.component.css'],
  host: {
    class: 'highlight'
  }
})
export class ClassHostOptionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
