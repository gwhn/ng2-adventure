import {
  Component,
  Input,
  trigger,
  transition,
  animate,
  state,
  style
} from '@angular/core';

import { Hero } from '../../hero';
import {HeroesService} from "../heroes.service";
@Component({
  moduleId: module.id,
  selector: 'animated-flyby',
  templateUrl: 'animated-flyby.component.html',
  styleUrls: ['animated-flyby.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({opacity: 0, transform: 'translate(-100%)'}),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 10 ease-out', style({opacity: 0, transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AnimatedFlybyComponent {

  @Input() heroes: Hero[];

  constructor(hs: HeroesService) {
    this.heroes = hs.heroes;
  }
}
