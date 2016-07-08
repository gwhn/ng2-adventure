/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CustomValidationComponent } from './custom-validation.component';

describe('Component: CustomValidation', () => {
  it('should create an instance', () => {
    let component = new CustomValidationComponent(new FormBuilder());
    expect(component).toBeTruthy();
  });
});
