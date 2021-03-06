import {
  Component,
  Input
} from '@angular/core';
import {
  FormGroup,
  REACTIVE_FORM_DIRECTIVES
} from '@angular/forms';

import { QuestionBase } from '../question-base';

@Component({
  moduleId: module.id,
  selector: 'df-question',
  templateUrl: 'dynamic-form-question.component.html',
  styleUrls: ['dynamic-form-question.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class DynamicFormQuestionComponent {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
