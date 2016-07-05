/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HelloListComponent } from './hello-list.component';

describe('Component: HelloList', () => {
  it('should create an instance', () => {
    let component = new HelloListComponent();
    expect(component).toBeTruthy();
  });
});
