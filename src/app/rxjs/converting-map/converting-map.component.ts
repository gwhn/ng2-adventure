import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {ObservableInput} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  selector: 'converting-map',
  templateUrl: 'converting-map.component.html',
  styleUrls: ['converting-map.component.css']
})
export class ConvertingMapComponent implements OnInit {

  messages:string[] = [];

  ngOnInit() {
//    let myMap = new Map([['key1', 1], ['key2', 2]]);
    let myMap:Array<[string, number]> = [['key1', 1], ['key2', 2]];

    Observable.from(<ObservableInput<any>>myMap)
      .subscribe(
        x => this.messages.push(`onNext: ${x}`),
        e => this.messages.push(`onError: ${e}`),
        () => this.messages.push('onCompleted')
      );
  }

}
