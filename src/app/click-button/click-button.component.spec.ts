/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ClickButtonComponent } from './click-button.component';

describe('Component: ClickButton', () => {
  it('should create an instance', () => {
    let component = new ClickButtonComponent();
    expect(component).toBeTruthy();
  });
});
