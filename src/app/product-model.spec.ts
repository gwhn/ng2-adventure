/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {ProductModel} from './product-model';

describe('ProductModel', () => {
  it('should create an instance', () => {
    expect(new ProductModel('1', 'test', 'image.url', ['dept1'], 1.23)).toBeTruthy();
  });
});
