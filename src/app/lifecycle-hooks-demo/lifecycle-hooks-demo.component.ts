import { Component } from '@angular/core';
import {AfterContentParentComponent} from "../after-content-parent/after-content-parent.component";
import {AfterViewParentComponent} from "../after-view-parent/after-view-parent.component";
import {OnChangesParentComponent} from "../on-changes-parent/on-changes-parent.component";
import {SpyComponent} from "../spy/spy.component";
import {PeekABooParentComponent} from "../peek-a-boo-parent/peek-a-boo-parent.component";

@Component({
  moduleId: module.id,
  selector: 'lifecycle-hooks-demo',
  templateUrl: 'lifecycle-hooks-demo.component.html',
  styleUrls: ['lifecycle-hooks-demo.component.css'],
  directives: [
    PeekABooParentComponent,
    SpyComponent,
    OnChangesParentComponent,
    AfterViewParentComponent,
    AfterContentParentComponent,
  ]
})
export class LifecycleHooksDemoComponent {}
