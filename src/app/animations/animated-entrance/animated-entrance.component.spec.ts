/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AnimatedEntranceComponent } from './animated-entrance.component';
import {HeroesService} from "../heroes.service";

describe('Component: AnimatedEntrance', () => {
  it('should create an instance', () => {
    let component = new AnimatedEntranceComponent(new HeroesService());
    expect(component).toBeTruthy();
  });
});
