import {Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import {Hero} from "../../hero";

@Component({
  moduleId: module.id,
  selector: 'on-changes',
  templateUrl: 'on-changes.component.html',
  styleUrls: ['on-changes.component.css']
})
export class OnChangesComponent implements OnChanges {

  @Input() hero: Hero;
  @Input() power: string;

  changeLog: string[] = [];

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  reset() {
    this.changeLog.length = 0;
  }
}
