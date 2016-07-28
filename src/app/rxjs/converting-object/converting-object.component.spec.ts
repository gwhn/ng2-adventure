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
import { ConvertingObjectComponent } from './converting-object.component';

describe('Component: ConvertingObject', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ConvertingObjectComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ConvertingObjectComponent],
      (component: ConvertingObjectComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ConvertingObjectComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ConvertingObjectComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-converting-object></app-converting-object>
  `,
  directives: [ConvertingObjectComponent]
})
class ConvertingObjectComponentTestController {
}

