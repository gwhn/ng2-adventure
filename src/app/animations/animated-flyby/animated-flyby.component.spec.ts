/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AnimatedFlybyComponent } from './animated-flyby.component';
import {HeroesService} from "../heroes.service";

describe('Component: AnimatedFlyby', () => {
  it('should create an instance', () => {
    let component = new AnimatedFlybyComponent(new HeroesService());
    expect(component).toBeTruthy();
  });
});
