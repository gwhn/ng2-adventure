/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ValueChangesComponent } from './value-changes.component';

describe('Component: ValueChanges', () => {
  it('should create an instance', () => {
    let component = new ValueChangesComponent(new FormBuilder());
    expect(component).toBeTruthy();
  });
});
