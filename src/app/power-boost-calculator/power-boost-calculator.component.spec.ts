/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';

describe('Component: PowerBoostCalculator', () => {
  it('should create an instance', () => {
    let component = new PowerBoostCalculatorComponent();
    expect(component).toBeTruthy();
  });
});
