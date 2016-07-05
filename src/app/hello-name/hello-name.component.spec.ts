/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HelloNameComponent } from './hello-name.component';

describe('Component: HelloName', () => {
  it('should create an instance', () => {
    let component = new HelloNameComponent();
    expect(component).toBeTruthy();
  });
});
