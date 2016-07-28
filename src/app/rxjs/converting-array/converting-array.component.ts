import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'converting-array',
  templateUrl: 'converting-array.component.html',
  styleUrls: ['converting-array.component.css']
})
export class ConvertingArrayComponent implements OnInit {

  messages: string[] = [];

  ngOnInit() {
    const array = [1, 2, 3, 4, 5];

    Observable.from(array)
      .subscribe(
        x => this.messages.push(`onNext: ${x}`),
        e => this.messages.push(`onError: ${e}`),
        () => this.messages.push('onCompleted')
      );
  }
}
