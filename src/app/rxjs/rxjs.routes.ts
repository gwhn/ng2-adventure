import {RouterConfig} from "@angular/router";
import {RxJsDemoComponent} from "./rx-js-demo/rx-js-demo.component";
import {TimerComponent} from "./timer/timer.component";
import {ConvertingArrayComponent} from "./converting-array/converting-array.component";
import {ConvertingObjectComponent} from "./converting-object/converting-object.component";
import {ConvertingSetComponent} from "./converting-set/converting-set.component";
import {ConvertingMapComponent} from "./converting-map/converting-map.component";
import {ColdStreamComponent} from "./cold-stream/cold-stream.component";
import {HotStreamComponent} from "./hot-stream/hot-stream.component";
import {FromEventComponent} from "./from-event/from-event.component";
import {WatchChildEventsComponent} from "./watch-child-events/watch-child-events.component";

export const rxjsRoutesConfig:RouterConfig = [
  {
    path: 'rxjs',
    component: RxJsDemoComponent,
    children: [
      {path: 'timer', component: TimerComponent},
      {path: 'converting-array', component: ConvertingArrayComponent},
      {path: 'converting-object', component: ConvertingObjectComponent},
      {path: 'converting-set', component: ConvertingSetComponent},
      {path: 'converting-map', component: ConvertingMapComponent},
      {path: 'cold-stream', component: ColdStreamComponent},
      {path: 'hot-stream', component: HotStreamComponent},
      {path: 'from-event', component: FromEventComponent},
      {path: 'watch-child-events', component: WatchChildEventsComponent},
      {path: '', redirectTo: '/rxjs/timer'}
    ]
  }
]
