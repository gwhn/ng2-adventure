import { Component, OnInit } from '@angular/core';
import { 
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'custom-validation',
  templateUrl: 'custom-validation.component.html',
  styleUrls: ['custom-validation.component.css'],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})
export class CustomValidationComponent implements OnInit {

  group: FormGroup;

  constructor(fb: FormBuilder) {
    this.group = fb.group({
      'sku': ['', Validators.compose([
          Validators.required,
          this.skuValidator
        ])]
    });
  }

  ngOnInit() {
  }

  skuValidator(fc: FormControl): {[s: string]: boolean} {
    if (!fc.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }
}
