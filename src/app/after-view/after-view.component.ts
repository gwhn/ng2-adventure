import {Component, AfterViewChecked, AfterViewInit, ViewChild} from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
  selector: 'my-child',
  template: '<input [(ngModel)]="hero">'
})
export class ChildViewComponent {
  hero = 'Magneto'
}

@Component({
  moduleId: module.id,
  selector: 'after-view',
  templateUrl: 'after-view.component.html',
  styleUrls: ['after-view.component.css'],
  directives: [ChildViewComponent]
})
export class AfterViewComponent implements AfterViewChecked, AfterViewInit {

  private prevHero = '';

  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

  ngAfterViewChecked():any {
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
    return undefined;
  }

  ngAfterViewInit():any {
    this.logIt('AfterViewInit');
    this.doSomething();
    return undefined;
  }

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  comment = '';

  private logIt(method: string) {
    let child = this.viewChild;
    let message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }

  private doSomething() {
    let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      this.logger.tick_then(() => this.comment = c);
    }
  }
}
