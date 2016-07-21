/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AfterContentParentComponent } from './after-content-parent.component';
import {LoggerService} from "../logger.service";

describe('Component: AfterContentParent', () => {
  it('should create an instance', () => {
    let component = new AfterContentParentComponent(new LoggerService());
    expect(component).toBeTruthy();
  });
});
