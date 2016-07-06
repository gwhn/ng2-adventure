import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'if',
  templateUrl: 'if.component.html',
  styleUrls: ['if.component.css']
})
export class IfComponent implements OnInit {

  flag: boolean;

  constructor() {
    this.flag = true;
  }

  ngOnInit() {
  }

  toggle(): void {
    this.flag = !this.flag;
  }
}
