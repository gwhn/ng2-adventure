/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import {LoggerService} from "../logger.service";

describe('Component: PeekABooParent', () => {
  it('should create an instance', () => {
    let component = new PeekABooParentComponent(new LoggerService() );
    expect(component).toBeTruthy();
  });
});
