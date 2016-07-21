import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChange
} from '@angular/core';
import {LoggerService} from "../logger.service";

let nextId = 1;

export class PeekABoo implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logIt('OnInit');
  }

  protected logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  moduleId: module.id,
  selector: 'peek-a-boo',
  templateUrl: 'peek-a-boo.component.html',
  styleUrls: ['peek-a-boo.component.css']
})
export class PeekABooComponent
  extends PeekABoo
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() name: string;

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);

    let is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    let changesMsgs: string[] = [];
    for (let propName in changes) {
      if (propName === 'name') {
        let name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
      this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
      this.verb = 'changed';
    }
  }

  ngDoCheck() {
    this.logIt('DoCheck');
  }

  ngAfterContentInit() {
    this.logIt('AfterContentInit');
  }

  ngAfterContentChecked() {
    this.logIt('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.logIt('AfterViewInit');
  }

  ngAfterViewChecked() {
    this.logIt('AfterViewChecked');
  }

  ngOnDestroy() {
    this.logIt('OnDestroy');
  }
}
