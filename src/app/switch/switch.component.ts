import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'switch',
  templateUrl: 'switch.component.html',
  styleUrls: ['switch.component.css']
})
export class SwitchComponent implements OnInit {

  value: number;

  constructor() {
    this.value = 1;
  }

  ngOnInit() {
  }
}
