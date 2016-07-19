/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { WikipediaComponent } from './wikipedia.component';
import {WikipediaService} from "../wikipedia.service";

describe('Component: Wikipedia', () => {
  it('should create an instance', () => {
    let component = new WikipediaComponent(new WikipediaService(null));
    expect(component).toBeTruthy();
  });
});
