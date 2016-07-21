import { Component } from '@angular/core';
import {LoggerService} from "../logger.service";
import {MyChildComponent} from "../my-child/my-child.component";
import {AfterContentComponent} from "../after-content/after-content.component";

@Component({
  moduleId: module.id,
  selector: 'after-content-parent',
  templateUrl: 'after-content-parent.component.html',
  styleUrls: ['after-content-parent.component.css'],
  providers: [LoggerService],
  directives: [AfterContentComponent, MyChildComponent]
})
export class AfterContentParentComponent {

  logs: string[];
  show = true;

  constructor(private logger: LoggerService) {
    this.logs = logger.logs;
  }

  reset() {
    this.logs.length = 0;
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }

}
