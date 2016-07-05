import { Component } from '@angular/core';

import { HelloWorldComponent } from './hello-world';
import { HelloNameComponent } from './hello-name';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    HelloWorldComponent,
    HelloNameComponent
  ]
})
export class AppComponent {
  title = 'ng2 Adventure';
}
