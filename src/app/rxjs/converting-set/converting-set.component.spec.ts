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
import { ConvertingSetComponent } from './converting-set.component';

describe('Component: ConvertingSet', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ConvertingSetComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ConvertingSetComponent],
      (component: ConvertingSetComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ConvertingSetComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ConvertingSetComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-converting-set></app-converting-set>
  `,
  directives: [ConvertingSetComponent]
})
class ConvertingSetComponentTestController {
}

