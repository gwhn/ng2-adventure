/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PeekABooComponent } from './peek-a-boo.component';
import {LoggerService} from "../logger.service";

describe('Component: PeekABoo', () => {
  it('should create an instance', () => {
    let component = new PeekABooComponent(new LoggerService());
    expect(component).toBeTruthy();
  });
});
