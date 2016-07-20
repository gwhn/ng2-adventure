/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AfterViewParentComponent } from './after-view-parent.component';
import {LoggerService} from "../logger.service";

describe('Component: AfterViewParent', () => {
  it('should create an instance', () => {
    let component = new AfterViewParentComponent(new LoggerService());
    expect(component).toBeTruthy();
  });
});
