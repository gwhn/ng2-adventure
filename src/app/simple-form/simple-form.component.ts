import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'simple-form',
  templateUrl: 'simple-form.component.html',
  styleUrls: ['simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  submit(form: any): void {
    console.log(form);
  }
}
