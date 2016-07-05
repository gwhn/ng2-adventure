/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DataModelComponent } from './data-model.component';

describe('Component: DataModel', () => {
  it('should create an instance', () => {
    let component = new DataModelComponent();
    expect(component).toBeTruthy();
  });
});
