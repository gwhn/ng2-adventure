import {RouterConfig, provideRouter} from "@angular/router";
import {PipeDemoComponent} from "./pipe-demo/pipe-demo.component";
import {LifecycleHooksDemoComponent} from "./lifecycle-hooks-demo/lifecycle-hooks-demo.component";
import {HttpClientDemoComponent} from "./http-client-demo/http-client-demo.component";
import {DynamicFormDemoComponent} from "./dynamic-form-demo/dynamic-form-demo.component";
import {AttributeDirectivesDemoComponent} from "./attribute-directives-demo/attribute-directives-demo.component";
import {AnimationsDemoComponent} from "./animations-demo/animations-demo.component";
import {BasicsDemoComponent} from "./basics-demo/basics-demo.component";

const routes: RouterConfig = [
  {path: 'pipes', component: PipeDemoComponent},
  {path: 'lifecycle-hooks', component: LifecycleHooksDemoComponent},
  {path: 'http-client', component: HttpClientDemoComponent},
  {path: 'dynamic-form', component: DynamicFormDemoComponent},
  {path: 'attribute-directives', component: AttributeDirectivesDemoComponent},
  {path: 'animations', component: AnimationsDemoComponent},
  {path: 'basics', component: BasicsDemoComponent},
  {path: '', redirectTo: '/basics'}
];

export const appRouterProviders = [
  provideRouter(routes)
];
