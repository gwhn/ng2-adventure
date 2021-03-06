import {Directive, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from "./logger.service";

let nextId = 1;

@Directive({
  selector: '[spy]'
})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logIt('onInit');
  }

  ngOnDestroy() {
    this.logIt('OnDestroy');
  }

  private logIt(msg: string) {
    this.logger.log(`Spy #${nextId++} ${msg}`);
  }
}
