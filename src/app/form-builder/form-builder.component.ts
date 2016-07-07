import { Component, OnInit } from '@angular/core';
import { 
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'form-builder',
  templateUrl: 'form-builder.component.html',
  styleUrls: ['form-builder.component.css'],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class FormBuilderComponent implements OnInit {

  group: FormGroup;

  constructor(fb: FormBuilder) {
    this.group = fb.group({
      'sku': ['testing 123']
    });
  }

  ngOnInit() {
  }

  submit(value: string): void {
    console.log(value);
  }
}
