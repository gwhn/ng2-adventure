import {Component, ViewChild} from '@angular/core';
import {OnChangesComponent} from "../on-changes/on-changes.component";
import {Hero} from "../hero";

@Component({
  moduleId: module.id,
  selector: 'on-changes-parent',
  templateUrl: 'on-changes-parent.component.html',
  styleUrls: ['on-changes-parent.component.css'],
  directives: [OnChangesComponent]
})
export class OnChangesParentComponent {

  hero: Hero;
  power: string;
  title: 'OnChanges';

  @ViewChild(OnChangesComponent) childView: OnChangesComponent;

  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }

}
