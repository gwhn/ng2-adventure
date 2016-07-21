/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DynamicFormDemoComponent } from './dynamic-form-demo.component';

describe('Component: DynamicFormDemo', () => {
  it('should create an instance', () => {
    let component = new DynamicFormDemoComponent();
    expect(component).toBeTruthy();
  });
});
