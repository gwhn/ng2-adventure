import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { Hero } from '../../hero';
import {HeroesService} from "../heroes.service";

@Component({
  moduleId: module.id,
  selector: 'animated-states',
  templateUrl: 'animated-states.component.html',
  styleUrls: ['animated-states.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({ transform: 'translateX(0) scale(1)'})),
      state('active', style({ transform: 'translateX(0) scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({ transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      transition('inactive => void', [
        animate(100, style({ transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({ transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({ transform: 'translateX(0) scale(0)'}))
      ])
    ])
  ]
})
export class AnimatedStatesComponent {

  @Input() heroes: Hero[];

  constructor(hs: HeroesService) {
    this.heroes = hs.heroes;
  }
}
