/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DoCheckComponent } from './do-check.component';

describe('Component: DoCheck', () => {
  it('should create an instance', () => {
    let component = new DoCheckComponent();
    expect(component).toBeTruthy();
  });
});
