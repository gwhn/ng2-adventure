/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { HeroAsyncMessageComponent } from './hero-async-message.component';

describe('Component: HeroAsyncMessage', () => {
  it('should create an instance', () => {
    let component = new HeroAsyncMessageComponent();
    expect(component).toBeTruthy();
  });
});
