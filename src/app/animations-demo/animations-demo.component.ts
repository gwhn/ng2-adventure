import { Component } from '@angular/core';
import {Hero} from "../hero";
import {AnimatedGroupComponent} from "../animated-group/animated-group.component";
import {AnimatedBounceComponent} from "../animated-bounce/animated-bounce.component";
import {AnimatedFlybyComponent} from "../animated-flyby/animated-flyby.component";
import {AnimatedShrinkComponent} from "../animated-shrink/animated-shrink.component";
import {AnimatedStatesComponent} from "../animated-states/animated-states.component";
import {AnimatedEntranceComponent} from "../animated-entrance/animated-entrance.component";
import {AnimatedListComponent} from "../animated-list/animated-list.component";

@Component({
  moduleId: module.id,
  selector: 'animations-demo',
  templateUrl: 'animations-demo.component.html',
  styleUrls: ['animations-demo.component.css'],
  directives: [
    AnimatedListComponent,
    AnimatedEntranceComponent,
    AnimatedStatesComponent,
    AnimatedShrinkComponent,
    AnimatedFlybyComponent,
    AnimatedBounceComponent,
    AnimatedGroupComponent,
  ]
})
export class AnimationsDemoComponent {

  heroes: Hero[] = [
    new Hero('Guy'),
    new Hero('Mary'),
    new Hero('Charles'),
    new Hero('Alex')
  ];

  addHero() {
    this.heroes.push(new Hero(`Hero ${this.heroes.length + 1}`))
  }

  removeHero() {
    this.heroes.splice(this.heroes.length - 1);
  }
}
