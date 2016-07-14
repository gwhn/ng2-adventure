import {
  Component,
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'animated-list',
  templateUrl: 'animated-list.component.html',
  styleUrls: ['animated-list.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AnimatedListComponent implements OnInit {
  private heroes: Hero[];

  constructor() {
    this.heroes = [
      new Hero('Guy'),
      new Hero('Mary'),
      new Hero('Charles'),
      new Hero('Alex')
    ];
  }

  ngOnInit() {
  }

}

class Hero {
  constructor(
    public name: string,
    public state = 'inactive'
  ) {}

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}
