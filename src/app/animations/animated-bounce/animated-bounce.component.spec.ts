/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AnimatedBounceComponent } from './animated-bounce.component';
import {HeroesService} from "../heroes.service";

describe('Component: AnimatedBounce', () => {
  it('should create an instance', () => {
    let component = new AnimatedBounceComponent(new HeroesService());
    expect(component).toBeTruthy();
  });
});
