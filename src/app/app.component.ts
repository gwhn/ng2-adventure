import { Component } from '@angular/core';

import { HelloWorldComponent } from './hello-world';
import { HelloNameComponent } from './hello-name';
import { HelloListComponent } from './hello-list';
import { ClickButtonComponent } from './click-button';
import { BoundInputComponent } from './bound-input';
import { ClassHostOptionComponent } from './class-host-option';
import { ActionLinksComponent } from './action-links';
import { DataModelComponent } from './data-model';
import { FormDataComponent } from './form-data';
import { MyData } from './my-data';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    HelloWorldComponent,
    HelloNameComponent,
    HelloListComponent,
    ClickButtonComponent,
    BoundInputComponent,
    ClassHostOptionComponent,
    ActionLinksComponent,
    DataModelComponent,
    FormDataComponent
  ]
})
export class AppComponent {
  title = 'ng2 Adventure';

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
