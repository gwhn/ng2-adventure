import { Component, OnInit } from '@angular/core';
import {SpyDirective} from "../spy.directive";
import {LoggerService} from "../logger.service";

@Component({
  moduleId: module.id,
  selector: 'spy-parent',
  templateUrl: 'spy.component.html',
  styleUrls: ['spy.component.css'],
  directives: [SpyDirective],
  providers: [LoggerService]
})
export class SpyComponent {

  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneto'];
  spyLog: string[];

  constructor(private logger: LoggerService) {
    this.spyLog = logger.logs;
  }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }

  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }

  reset() {
    this.logger.log('-- reset --');
    this.heroes.length = 0;
    this.logger.tick();
  }
}
