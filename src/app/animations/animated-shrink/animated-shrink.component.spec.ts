/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AnimatedShrinkComponent } from './animated-shrink.component';
import {HeroesService} from "../heroes.service";

describe('Component: AnimatedShrink', () => {
  it('should create an instance', () => {
    let component = new AnimatedShrinkComponent(new HeroesService());
    expect(component).toBeTruthy();
  });
});
