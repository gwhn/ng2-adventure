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

import { TwoWayBindComponent } from './two-way-bind.component';

describe('Component: TwoWayBind', () => {
  it('should create an instance', () => {
    let component = new TwoWayBindComponent(new FormBuilder());
    expect(component).toBeTruthy();
  });
});
