import { Component } from '@angular/core';
import {LoggerService} from "../logger.service";
import {AfterViewComponent} from "../after-view/after-view.component";

@Component({
  moduleId: module.id,
  selector: 'after-view-parent',
  templateUrl: 'after-view-parent.component.html',
  styleUrls: ['after-view-parent.component.css'],
  providers: [LoggerService],
  directives: [AfterViewComponent]
})
export class AfterViewParentComponent {

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
