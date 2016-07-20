/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { OnChangesParentComponent } from './on-changes-parent.component';

describe('Component: OnChangesParent', () => {
  it('should create an instance', () => {
    let component = new OnChangesParentComponent();
    expect(component).toBeTruthy();
  });
});
