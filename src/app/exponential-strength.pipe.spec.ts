/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

describe('Pipe: ExponentialStrength', () => {
  it('create an instance', () => {
    let pipe = new ExponentialStrengthPipe();
    expect(pipe).toBeTruthy();
  });
});
