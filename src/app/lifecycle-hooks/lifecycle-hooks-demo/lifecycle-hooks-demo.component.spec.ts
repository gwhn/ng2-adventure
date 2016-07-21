/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LifecycleHooksDemoComponent } from './lifecycle-hooks-demo.component';

describe('Component: LifecycleHooksDemo', () => {
  it('should create an instance', () => {
    let component = new LifecycleHooksDemoComponent();
    expect(component).toBeTruthy();
  });
});
