/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BasicsDemoComponent } from './basics-demo.component';

describe('Component: BasicsDemo', () => {
  it('should create an instance', () => {
    let component = new BasicsDemoComponent();
    expect(component).toBeTruthy();
  });
});
