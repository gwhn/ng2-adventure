import { Component, OnInit } from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'value-changes',
  templateUrl: 'value-changes.component.html',
  styleUrls: ['value-changes.component.css'],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class ValueChangesComponent implements OnInit {

  group: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.group = fb.group({
      sku: ['', Validators.required]
    });
    this.sku = this.group.controls['sku'];
    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku value changed', value);
    });
    this.group.valueChanges.subscribe((form: FormGroup) => {
      console.log('group value changed', form);
    });
  }

  ngOnInit() {
  }

}
