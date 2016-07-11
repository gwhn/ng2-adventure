import { Component, OnInit } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'two-way-bind',
  templateUrl: 'two-way-bind.component.html',
  styleUrls: ['two-way-bind.component.css'],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class TwoWayBindComponent implements OnInit {

  group: FormGroup;
  sku: string;

  constructor(fb: FormBuilder) {
    this.group = fb.group({
      sku: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submit(form: FormGroup): boolean {
    console.log('two-way binding form', form);
    return false;
  }
}
