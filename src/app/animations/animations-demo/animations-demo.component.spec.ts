/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AnimationsDemoComponent } from './animations-demo.component';
import {HeroesService} from "../heroes.service";

describe('Component: AnimationsDemo', () => {
  it('should create an instance', () => {
    let component = new AnimationsDemoComponent(new HeroesService());
    expect(component).toBeTruthy();
  });
});
