import {
  Component,
  Input,
  trigger,
  state,
  animate,
  style,
  transition
} from '@angular/core';

import { Hero } from '../hero';

@Component({
  moduleId: module.id,
  selector: 'animated-shrink',
  templateUrl: 'animated-shrink.component.html',
  styleUrls: ['animated-shrink.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class AnimatedShrinkComponent {
  @Input() heroes: Hero[];
}
