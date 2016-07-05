import { Component } from '@angular/core';

import { HelloWorldComponent } from './hello-world';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HelloWorldComponent]
})
export class AppComponent {
  title = 'ng2 Adventure';
}
