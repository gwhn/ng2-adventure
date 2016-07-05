/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {MyData} from './my-data';

describe('MyData', () => {
  it('should create an instance', () => {
    expect(new MyData(1, 'test')).toBeTruthy();
  });
});
