/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('Logger Service', () => {
  beforeEachProviders(() => [LoggerService]);

  it('should ...',
      inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));
});
