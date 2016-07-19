/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HeroListComponent } from './hero-list.component';
import {HeroService} from "../hero.service";
import {Http, ConnectionBackend} from "@angular/http";

describe('Component: HeroList', () => {
  it('should create an instance', () => {
    let component = new HeroListComponent(new HeroService(new Http(null, null)));
    expect(component).toBeTruthy();
  });
});
