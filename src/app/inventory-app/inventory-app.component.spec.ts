/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { InventoryAppComponent } from './inventory-app.component';

describe('Component: InventoryApp', () => {
  it('should create an instance', () => {
    let component = new InventoryAppComponent();
    expect(component).toBeTruthy();
  });
});
