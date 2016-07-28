import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.css']
})
export class TimerComponent implements OnInit {

  messages: string[] = [];

  constructor() {}

  ngOnInit() {
    Observable.timer(5000, 1000)
      .timestamp()
      .subscribe(x => {
        this.messages.push(`${x.value} - ${x.timestamp}`);
      });
  }
}
