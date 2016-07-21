import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'lifecycle-hooks-demo',
  templateUrl: 'lifecycle-hooks-demo.component.html',
  styleUrls: ['lifecycle-hooks-demo.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LifecycleHooksDemoComponent {}
