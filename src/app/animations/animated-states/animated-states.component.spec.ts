/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AnimatedStatesComponent } from './animated-states.component';
import {HeroesService} from "../heroes.service";

describe('Component: AnimatedStates', () => {
  it('should create an instance', () => {
    let component = new AnimatedStatesComponent(new HeroesService());
    expect(component).toBeTruthy();
  });
});
