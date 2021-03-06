/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductDepartmentComponent } from './product-department.component';

describe('Component: ProductDepartment', () => {
  it('should create an instance', () => {
    let component = new ProductDepartmentComponent();
    expect(component).toBeTruthy();
  });
});
