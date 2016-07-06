/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductPriceComponent } from './product-price.component';

describe('Component: ProductPrice', () => {
  it('should create an instance', () => {
    let component = new ProductPriceComponent();
    expect(component).toBeTruthy();
  });
});
