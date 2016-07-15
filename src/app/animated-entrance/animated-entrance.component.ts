import {
  Component,
  Input,
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/core';

import { Hero } from '../hero';

@Component({
  moduleId: module.id,
  selector: 'animated-entrance',
  templateUrl: 'animated-entrance.component.html',
  styleUrls: ['animated-entrance.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)'})),
      transition('void => *', [
        style({ transform: 'translateX(-100%)'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AnimatedEntranceComponent {
  @Input() heroes: Hero[];
}
