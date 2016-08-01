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
import { WatchChildEventsComponent } from './watch-child-events.component';

describe('Component: WatchChildEvents', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [WatchChildEventsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([WatchChildEventsComponent],
      (component: WatchChildEventsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(WatchChildEventsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(WatchChildEventsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-watch-child-events></app-watch-child-events>
  `,
  directives: [WatchChildEventsComponent]
})
class WatchChildEventsComponentTestController {
}

