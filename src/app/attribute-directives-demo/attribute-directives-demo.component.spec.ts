/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AttributeDirectivesDemoComponent } from './attribute-directives-demo.component';

describe('Component: AttributeDirectivesDemo', () => {
  it('should create an instance', () => {
    let component = new AttributeDirectivesDemoComponent();
    expect(component).toBeTruthy();
  });
});
