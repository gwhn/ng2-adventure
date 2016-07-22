import { Injectable } from '@angular/core';
import {Hero} from "../hero";

@Injectable()
export class HeroesService {

  heroes: Hero[] = [
    new Hero('Guy'),
    new Hero('Mary'),
    new Hero('Charles'),
    new Hero('Alex')
  ];

  add(hero: Hero) {
    this.heroes.push(hero);
  }

  remove(index: number) {
    if (index < this.heroes.length) {
      this.heroes.splice(index);
    }
  }
}
