/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AfterViewComponent } from './after-view.component';
import {LoggerService} from "../logger.service";

describe('Component: AfterView', () => {
  it('should create an instance', () => {
    let component = new AfterViewComponent(new LoggerService());
    expect(component).toBeTruthy();
  });
});
