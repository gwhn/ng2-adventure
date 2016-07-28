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
import { ConvertingArrayComponent } from './converting-array.component';

describe('Component: ConvertingArray', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ConvertingArrayComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ConvertingArrayComponent],
      (component: ConvertingArrayComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ConvertingArrayComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ConvertingArrayComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-converting-array></app-converting-array>
  `,
  directives: [ConvertingArrayComponent]
})
class ConvertingArrayComponentTestController {
}

