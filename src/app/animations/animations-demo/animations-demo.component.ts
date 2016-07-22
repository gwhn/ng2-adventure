import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HeroesService} from "../heroes.service";
import {Hero} from "../../hero";

@Component({
  moduleId: module.id,
  selector: 'animations-demo',
  templateUrl: 'animations-demo.component.html',
  styleUrls: ['animations-demo.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroesService]
})
export class AnimationsDemoComponent {

  constructor(private hs: HeroesService) {}

  addNew() {
    this.hs.add(new Hero(`Hero ${this.hs.heroes.length + 1}`));
  }

  removeLast() {
    this.hs.remove(this.hs.heroes.length - 1);
  }
}
