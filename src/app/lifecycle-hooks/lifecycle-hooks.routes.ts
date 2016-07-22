import {RouterConfig} from "@angular/router";
import {LifecycleHooksDemoComponent} from "./lifecycle-hooks-demo/lifecycle-hooks-demo.component";
import {PeekABooParentComponent} from "./peek-a-boo-parent/peek-a-boo-parent.component";
import {SpyComponent} from "./spy/spy.component";
import {OnChangesParentComponent} from "./on-changes-parent/on-changes-parent.component";
import {AfterViewParentComponent} from "./after-view-parent/after-view-parent.component";
import {AfterContentParentComponent} from "./after-content-parent/after-content-parent.component";

export const lifecycleHooksRoutes: RouterConfig = [
  {
    path: 'lifecycle-hooks',
    component: LifecycleHooksDemoComponent,
    children: [
      {path: 'peek-a-boo', component: PeekABooParentComponent},
      {path: 'spy', component: SpyComponent},
      {path: 'on-changes', component: OnChangesParentComponent},
      {path: 'after-view', component: AfterViewParentComponent},
      {path: 'after-content', component: AfterContentParentComponent},
      {path: '', redirectTo: '/lifecycle-hooks/peek-a-boo'}
    ]
  }
];
