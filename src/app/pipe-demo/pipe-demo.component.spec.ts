/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PipeDemoComponent } from './pipe-demo.component';

describe('Component: PipeDemo', () => {
  it('should create an instance', () => {
    let component = new PipeDemoComponent();
    expect(component).toBeTruthy();
  });
});
