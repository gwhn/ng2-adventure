/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { SpyDirective } from './spy.directive';
import {LoggerService} from "./logger.service";

describe('Spy Directive', () => {
  it('should create an instance', () => {
    let directive = new SpyDirective(new LoggerService());
    expect(directive).toBeTruthy();
  });
});
