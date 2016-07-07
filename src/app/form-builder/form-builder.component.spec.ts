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

import { FormBuilderComponent } from './form-builder.component';

describe('Component: FormBuilder', () => {
  it('should create an instance', () => {
    let component = new FormBuilderComponent(new FormBuilder());
    expect(component).toBeTruthy();
  });
});
