import { Component } from '@angular/core';
import {HelloWorldComponent} from "../hello-world/hello-world.component";
import {HelloNameComponent} from "../hello-name/hello-name.component";
import {HelloListComponent} from "../hello-list/hello-list.component";
import {ClickButtonComponent} from "../click-button/click-button.component";
import {BoundInputComponent} from "../bound-input/bound-input.component";
import {ClassHostOptionComponent} from "../class-host-option/class-host-option.component";
import {ActionLinksComponent} from "../action-links/action-links.component";
import {DataModelComponent} from "../data-model/data-model.component";
import {FormDataComponent} from "../form-data/form-data.component";
import {InventoryAppComponent} from "../inventory-app/inventory-app.component";
import {IfComponent} from "../if/if.component";
import {SwitchComponent} from "../switch/switch.component";
import {StyleComponent} from "../style/style.component";
import {ClassComponent} from "../class/class.component";
import {NestedForComponent} from "../nested-for/nested-for.component";
import {SimpleFormComponent} from "../simple-form/simple-form.component";
import {FormBuilderComponent} from "../form-builder/form-builder.component";
import {ExplicitValidationComponent} from "../explicit-validation/explicit-validation.component";
import {CustomValidationComponent} from "../custom-validation/custom-validation.component";
import {ValueChangesComponent} from "../value-changes/value-changes.component";
import {TwoWayBindComponent} from "../two-way-bind/two-way-bind.component";
import {MyData} from "../my-data";

@Component({
  moduleId: module.id,
  selector: 'basics-demo',
  templateUrl: 'basics-demo.component.html',
  styleUrls: ['basics-demo.component.css'],
  directives: [
    HelloWorldComponent,
    HelloNameComponent,
    HelloListComponent,
    ClickButtonComponent,
    BoundInputComponent,
    ClassHostOptionComponent,
    ActionLinksComponent,
    DataModelComponent,
    FormDataComponent,
    InventoryAppComponent,
    IfComponent,
    SwitchComponent,
    StyleComponent,
    ClassComponent,
    NestedForComponent,
    SimpleFormComponent,
    FormBuilderComponent,
    ExplicitValidationComponent,
    CustomValidationComponent,
    ValueChangesComponent,
    TwoWayBindComponent,
  ]
})
export class BasicsDemoComponent {

  myData: MyData[] = [
    new MyData(1, 'first'),
    new MyData(2, 'second', 'different')
  ];

  addData(newData: MyData): void {
    this.myData.push(newData);
  }

  sortedData(): MyData[] {
    return this.myData.sort((a: MyData, b: MyData) => {
      const aText: string = a.text.toLowerCase();
      const bText: string = b.text.toLowerCase();
      if (aText < bText) {
        return -1;
      } else if (aText > bText) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
