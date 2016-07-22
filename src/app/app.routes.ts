import {RouterConfig, provideRouter} from "@angular/router";
import {PipeDemoComponent} from "./pipe-demo/pipe-demo.component";
import {HttpClientDemoComponent} from "./http-client-demo/http-client-demo.component";
import {DynamicFormDemoComponent} from "./dynamic-form-demo/dynamic-form-demo.component";
import {AttributeDirectivesDemoComponent} from "./attribute-directives-demo/attribute-directives-demo.component";
import {BasicsDemoComponent} from "./basics-demo/basics-demo.component";
import {lifecycleHooksRoutes} from "./lifecycle-hooks/lifecycle-hooks.routes";
import {animationsRoutes} from "./animations/animations.routes";

const routes: RouterConfig = [
  {path: 'pipes', component: PipeDemoComponent},
  {path: 'http-client', component: HttpClientDemoComponent},
  {path: 'dynamic-form', component: DynamicFormDemoComponent},
  {path: 'attribute-directives', component: AttributeDirectivesDemoComponent},
  {path: 'basics', component: BasicsDemoComponent},
  ...lifecycleHooksRoutes,
  ...animationsRoutes,
  {path: '', redirectTo: '/basics', pathMatch: 'full'}
];

export const appRouterProviders = [
  provideRouter(routes)
];
