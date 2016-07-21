import {Component, Input, DoCheck, OnChanges, SimpleChange} from '@angular/core';
import {Hero} from "../../hero";

@Component({
  moduleId: module.id,
  selector: 'do-check',
  templateUrl: 'do-check.component.html',
  styleUrls: ['do-check.component.css']
})
export class DoCheckComponent implements DoCheck, OnChanges {

  @Input() hero: Hero;
  @Input() power: string;

  changeDetected = false;
  changeLog: string[] = [];
  oldHeroName = '';
  oldPower = '';
  oldLogLength = 0;
  noChangeCount = 0;

  constructor() {}

  ngDoCheck() {
    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
    }

    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      let count = this.noChangeCount += 1;
      let noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
      if (count === 1) {
        this.changeLog.push(noChangeMsg);
      } else {
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
    }

    this.changeDetected = false;
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`OnChanges: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  reset() {
    this.changeDetected = true;
    this.changeLog.length = 0;
  }
}
