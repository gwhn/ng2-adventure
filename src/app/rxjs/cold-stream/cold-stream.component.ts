import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'cold-stream',
  templateUrl: 'cold-stream.component.html',
  styleUrls: ['cold-stream.component.css']
})
export class ColdStreamComponent implements OnInit {

  messages: string[] = [];

  ngOnInit() {
    const source = Observable.interval(1000);

    const subscription1 = source.subscribe(
      (x) => this.messages.push(`Observer 1: onNext: ${x}`),
      (e) => this.messages.push(`Observer 1: onError: ${e.message}`),
      () => this.messages.push('Observer 1: onCompleted')
    );

    const subscription2 = source.subscribe(
      (x) => this.messages.push(`Observer 2: onNext: ${x}`),
      (e) => this.messages.push(`Observer 2: onError: ${e.message}`),
      () => this.messages.push('Observer 2: onCompleted')
    );

    setTimeout(() => {
      subscription1.unsubscribe();
      subscription2.unsubscribe();
    }, 10000);
  }

}
