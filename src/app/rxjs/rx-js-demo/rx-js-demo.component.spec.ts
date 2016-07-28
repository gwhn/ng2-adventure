import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RxJsDemoComponent } from './rx-js-demo.component';

describe('Component: RxJsDemo', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [RxJsDemoComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([RxJsDemoComponent],
      (component: RxJsDemoComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(RxJsDemoComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(RxJsDemoComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-rx-js-demo></app-rx-js-demo>
  `,
  directives: [RxJsDemoComponent]
})
class RxJsDemoComponentTestController {
}

