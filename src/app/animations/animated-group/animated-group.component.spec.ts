/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AnimatedGroupComponent } from './animated-group.component';
import {HeroesService} from "../heroes.service";

describe('Component: AnimatedGroup', () => {
  it('should create an instance', () => {
    let component = new AnimatedGroupComponent(new HeroesService());
    expect(component).toBeTruthy();
  });
});
