/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AfterContentComponent } from './after-content.component';
import {LoggerService} from "../logger.service";

describe('Component: AfterContent', () => {
  it('should create an instance', () => {
    let component = new AfterContentComponent(new LoggerService());
    expect(component).toBeTruthy();
  });
});
