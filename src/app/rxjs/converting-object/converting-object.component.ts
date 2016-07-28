import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'converting-object',
  templateUrl: 'converting-object.component.html',
  styleUrls: ['converting-object.component.css']
})
export class ConvertingObjectComponent implements OnInit {

  messages: string[] = [];

  ngOnInit() {
    const obj: {
      [index: number]: number;
      length: number;
    } = {
      length: 50
    };

    Observable.from(obj, (v, k) => {return k + 1;})
      .subscribe(
        x => this.messages.push(`onNext: ${x}`),
        e => this.messages.push(`onError: ${e}`),
        () => this.messages.push('onCompleted')
      );
  }
}
