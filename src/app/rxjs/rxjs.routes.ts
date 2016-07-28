import {RouterConfig} from "@angular/router";
import {RxJsDemoComponent} from "./rx-js-demo/rx-js-demo.component";
import {TimerComponent} from "./timer/timer.component";
import {ConvertingArrayComponent} from "./converting-array/converting-array.component";
import {ConvertingObjectComponent} from "./converting-object/converting-object.component";

export const rxjsRoutesConfig: RouterConfig = [
  {
    path: 'rxjs',
    component: RxJsDemoComponent,
    children: [
      {path: 'timer', component: TimerComponent },
      {path: 'converting-array', component: ConvertingArrayComponent },
      {path: 'converting-object', component: ConvertingObjectComponent },
      {path: '', redirectTo: '/rxjs/timer'}
    ]
  }
]
