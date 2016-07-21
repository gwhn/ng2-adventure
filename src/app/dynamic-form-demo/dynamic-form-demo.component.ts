import { Component } from '@angular/core';
import {QuestionService} from "../question.service";
import {DynamicFormComponent} from "../dynamic-form/dynamic-form.component";

@Component({
  moduleId: module.id,
  selector: 'dynamic-form-demo',
  templateUrl: 'dynamic-form-demo.component.html',
  styleUrls: ['dynamic-form-demo.component.css'],
  directives: [DynamicFormComponent],
  providers: [QuestionService]
})
export class DynamicFormDemoComponent {

  questions: any[];

  constructor(qs: QuestionService) {
    this.questions = qs.getQuestions();
  }
}
