/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PowerBoosterComponent } from './power-booster.component';

describe('Component: PowerBooster', () => {
  it('should create an instance', () => {
    let component = new PowerBoosterComponent();
    expect(component).toBeTruthy();
  });
});
