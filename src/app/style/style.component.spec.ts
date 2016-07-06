/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { StyleComponent } from './style.component';

describe('Component: Style', () => {
  it('should create an instance', () => {
    let component = new StyleComponent();
    expect(component).toBeTruthy();
  });
});
