import {Component, Output, EventEmitter} from '@angular/core';
import {Subject} from "rxjs/Rx";
import {LocationService} from "../location.service";

@Component({
  moduleId: module.id,
  selector: 'child-event-producer',
  templateUrl: 'child-event-producer.component.html',
  styleUrls: ['child-event-producer.component.css']
})
export class ChildEventProducerComponent {

  @Output() event1:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() event2:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() event3:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  subject = new Subject();

  constructor(private svc:LocationService) {
    this.subject
      .sampleTime(1000)
      .subscribe((e:MouseEvent) => {
        this.event1.emit(e);
      });
  }

  pHandler(e:MouseEvent) {
    this.subject.next(e);
    this.event2.emit(e);
    this.event3.emit(e);
    this.svc.move({
      type: e.type,
      x: e.x,
      y: e.y
    });
  }
}
