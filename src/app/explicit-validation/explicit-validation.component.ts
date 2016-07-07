import { Component, OnInit } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'explicit-validation',
  templateUrl: 'explicit-validation.component.html',
  styleUrls: ['explicit-validation.component.css'],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class ExplicitValidationComponent implements OnInit {

  group: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.group = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.group.controls['sku'];
  }

  ngOnInit() {
  }

  submit(value: string): void {
    console.log(value);
  }
}
