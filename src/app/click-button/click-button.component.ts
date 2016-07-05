import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'click-button',
  templateUrl: 'click-button.component.html',
  styleUrls: ['click-button.component.css']
})
export class ClickButtonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  pressButton(): void {
    console.log('You pressed the button like you were told to. Well done');
  }
}
