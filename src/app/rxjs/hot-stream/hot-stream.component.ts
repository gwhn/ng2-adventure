import {Component, OnInit, ElementRef} from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'hot-stream',
  templateUrl: 'hot-stream.component.html',
  styleUrls: ['hot-stream.component.css']
})
export class HotStreamComponent implements OnInit {

  messages:string[] = [];

  ngOnInit() {
    this.messages.push(`Current time: ${Date.now()}`);

    const source = Observable.interval(1000);

    const hot = source.publish();

    const subscription1 = hot.subscribe(
      (x) => this.messages.push(`Observer 1: onNext: ${x}`),
      (e) => this.messages.push(`Observer 1: onError: ${e.message}`),
      () => this.messages.push('Observer 1: onCompleted')
    );

    this.messages.push(`Current time after 1st subscription: ${Date.now()}`);

    setTimeout(() => {
      hot.connect();

      this.messages.push(`Current time after connect: ${Date.now()}`);

      setTimeout(() => {
        const subscription2 = hot.subscribe(
          (x) => this.messages.push(`Observer 2: onNext: ${x}`),
          (e) => this.messages.push(`Observer 2: onError: ${e.message}`),
          () => this.messages.push('Observer 2: onCompleted')
        );

        this.messages.push(`Current time after 2nd subscription: ${Date.now()}`);

        setTimeout(() => {
          subscription1.unsubscribe();
          subscription2.unsubscribe();
        }, 6000);
      }, 3000);
    }, 3000);

  }
}
