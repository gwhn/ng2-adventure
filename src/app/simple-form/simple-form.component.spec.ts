/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SimpleFormComponent } from './simple-form.component';

describe('Component: SimpleForm', () => {
  it('should create an instance', () => {
    let component = new SimpleFormComponent();
    expect(component).toBeTruthy();
  });
});
