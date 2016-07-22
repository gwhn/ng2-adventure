import { Component } from '@angular/core';

import './rxjs-operators';

import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'ng2-adventure-app',
  templateUrl: 'ng2-adventure.component.html',
  styleUrls: ['ng2-adventure.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class Ng2AdventureAppComponent {
  title = 'ng2 Adventure';
}
