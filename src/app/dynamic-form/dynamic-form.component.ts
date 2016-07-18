import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import {
  FormGroup,
  REACTIVE_FORM_DIRECTIVES
} from '@angular/forms';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';

@Component({
  moduleId: module.id,
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  styleUrls: ['dynamic-form.component.css']
  directives: [
    DynamicFormQuestionComponent,
    REACTIVE_FORM_DIRECTIVES
  ],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payload = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.value);
  }
}
