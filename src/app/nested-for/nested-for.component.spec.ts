/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NestedForComponent } from './nested-for.component';

describe('Component: NestedFor', () => {
  it('should create an instance', () => {
    let component = new NestedForComponent();
    expect(component).toBeTruthy();
  });
});
