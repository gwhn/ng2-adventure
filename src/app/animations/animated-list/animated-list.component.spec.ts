/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AnimatedListComponent } from './animated-list.component';
import {HeroesService} from "../heroes.service";

describe('Component: AnimatedList', () => {
  it('should create an instance', () => {
    let component = new AnimatedListComponent(new HeroesService());
    expect(component).toBeTruthy();
  });
});
