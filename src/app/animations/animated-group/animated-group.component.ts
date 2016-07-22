import {
  Component,
  Input,
  trigger,
  state,
  style,
  group,
  transition,
  animate
} from '@angular/core';

import { Hero } from '../../hero';
import {HeroesService} from "../heroes.service";

@Component({
  moduleId: module.id,
  selector: 'animated-group',
  templateUrl: 'animated-group.component.html',
  styleUrls: ['animated-group.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AnimatedGroupComponent {

  @Input() heroes: Hero[];

  constructor(hs: HeroesService) {
    this.heroes = hs.heroes;
  }
}
