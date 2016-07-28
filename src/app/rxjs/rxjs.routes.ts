import {RouterConfig} from "@angular/router";
import {RxJsDemoComponent} from "./rx-js-demo/rx-js-demo.component";
import {TimerComponent} from "./timer/timer.component";

export const rxjsRoutesConfig: RouterConfig = [
  {
    path: 'rxjs',
    component: RxJsDemoComponent,
    children: [
      {path: 'timer', component: TimerComponent },
      {path: '', redirectTo: '/rxjs/timer'}
    ]
  }
]
