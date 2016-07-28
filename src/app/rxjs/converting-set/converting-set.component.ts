import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {ObservableInput} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  selector: 'converting-set',
  templateUrl: 'converting-set.component.html',
  styleUrls: ['converting-set.component.css']
})
export class ConvertingSetComponent implements OnInit {

  messages: string[] = [];

  ngOnInit() {
    let mySet: {} = new Set([1, 2, 3, 4, 5, 6, 7]);

    Observable.from(<ObservableInput<number>>mySet)
      .subscribe(
        x => this.messages.push(`onNext: ${x}`),
        e => this.messages.push(`onError: ${e}`),
        () => this.messages.push('onCompleted')
      );
  }

}
