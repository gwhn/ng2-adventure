import {RouterConfig} from "@angular/router";
import {AnimationsDemoComponent} from "./animations-demo/animations-demo.component";
import {AnimatedGroupComponent} from "./animated-group/animated-group.component";
import {AnimatedBounceComponent} from "./animated-bounce/animated-bounce.component";
import {AnimatedFlybyComponent} from "./animated-flyby/animated-flyby.component";
import {AnimatedShrinkComponent} from "./animated-shrink/animated-shrink.component";
import {AnimatedStatesComponent} from "./animated-states/animated-states.component";
import {AnimatedEntranceComponent} from "./animated-entrance/animated-entrance.component";
import {AnimatedListComponent} from "./animated-list/animated-list.component";

export const animationsRoutes: RouterConfig = [
  {
    path: 'animations',
    component: AnimationsDemoComponent,
    children: [
      {path: 'group', component: AnimatedGroupComponent},
      {path: 'bounce', component: AnimatedBounceComponent},
      {path: 'flyby', component: AnimatedFlybyComponent},
      {path: 'shrink', component: AnimatedShrinkComponent},
      {path: 'states', component: AnimatedStatesComponent},
      {path: 'entrance', component: AnimatedEntranceComponent},
      {path: 'list', component: AnimatedListComponent},
      {path: '', redirectTo: '/animations/list'}
    ]
  }
];
