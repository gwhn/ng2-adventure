import { Component } from '@angular/core';
import {PeekABooComponent} from "../peek-a-boo/peek-a-boo.component";
import {LoggerService} from "../logger.service";

@Component({
  moduleId: module.id,
  selector: 'peek-a-boo-parent',
  templateUrl: 'peek-a-boo-parent.component.html',
  styleUrls: ['peek-a-boo-parent.component.css'],
  directives: [PeekABooComponent],
  providers: [LoggerService]
})
export class PeekABooParentComponent {

  hasChild = false;
  hookLog: string[];

  heroName = 'Windstorm';
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear();
    }
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }

}
