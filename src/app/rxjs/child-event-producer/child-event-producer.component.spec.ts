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
import { ChildEventProducerComponent } from './child-event-producer.component';

describe('Component: ChildEventProducer', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ChildEventProducerComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ChildEventProducerComponent],
      (component: ChildEventProducerComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ChildEventProducerComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ChildEventProducerComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-child-event-producer></app-child-event-producer>
  `,
  directives: [ChildEventProducerComponent]
})
class ChildEventProducerComponentTestController {
}

