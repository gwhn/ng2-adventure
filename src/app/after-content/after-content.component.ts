import {Component, AfterContentInit, AfterContentChecked, ContentChild} from '@angular/core';
import {MyChildComponent} from "../my-child/my-child.component";
import {LoggerService} from "../logger.service";

@Component({
  moduleId: module.id,
  selector: 'after-content',
  templateUrl: 'after-content.component.html',
  styleUrls: ['after-content.component.css']
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
  private prevHero = '';
  comment = '';

  @ContentChild(MyChildComponent) contentChild: MyChildComponent;

  ngAfterContentChecked():any {
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
    return undefined;
  }

  ngAfterContentInit():any {
    this.logIt('AfterContentInit');
    this.doSomething();
    return undefined;
  }

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    let child = this.contentChild;
    let message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
}
