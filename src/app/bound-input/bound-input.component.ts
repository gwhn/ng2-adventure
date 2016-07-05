import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bound-input',
  templateUrl: 'bound-input.component.html',
  styleUrls: ['bound-input.component.css']
})
export class BoundInputComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  pressButton(input: HTMLInputElement): void {
    console.log(`The value of the #input HTMLInputElement is ${input.value}`);
  }
}
