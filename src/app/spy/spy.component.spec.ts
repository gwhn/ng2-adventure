/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SpyComponent } from './spy.component';
import {LoggerService} from "../logger.service";

describe('Component: Spy', () => {
  it('should create an instance', () => {
    let component = new SpyComponent(new LoggerService());
    expect(component).toBeTruthy();
  });
});
