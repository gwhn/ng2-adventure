/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';
import { QuestionControlService } from "../question-control.service";

describe('Component: DynamicForm', () => {
  it('should create an instance', () => {
    let component = new DynamicFormComponent(new QuestionControlService());
    expect(component).toBeTruthy();
  });
});
