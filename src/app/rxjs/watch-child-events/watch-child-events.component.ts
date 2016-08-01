import {Component, OnInit, ElementRef, EventEmitter} from '@angular/core';
import {Observable, Subject} from "rxjs/Rx";
import {ChildEventProducerComponent} from "../child-event-producer/child-event-producer.component";

@Component({
  moduleId: module.id,
  selector: 'watch-child-events',
  templateUrl: 'watch-child-events.component.html',
  styleUrls: ['watch-child-events.component.css'],
  directives: [ChildEventProducerComponent]
})
export class WatchChildEventsComponent implements OnInit {

  p1 = new Subject();
  p3: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  message = '';

  constructor(private el:ElementRef) {
    this.p1.subscribe((e:MouseEvent) => {
      this.message = `p[1]: ${e.type} (${e.x}, ${e.y})`;
    });

    this.p3.subscribe((e:MouseEvent) => {
      this.message = `p[3]: ${e.type} (${e.x}, ${e.y})`;
    });
  }

  ngOnInit() {
    const p0 = this.el.nativeElement.getElementsByTagName('p')[0];

    if (p0) {
      Observable.fromEvent(p0, 'click').subscribe((e:MouseEvent) => {
        this.message = `p[0]: ${e.type} (${e.x}, ${e.y})`;
      });
    }
  }

  p1Click(e:MouseEvent) {
    this.p1.next(e);
  }

  p2Click(e:MouseEvent) {
    this.message = `p[2]: ${e.type} (${e.x}, ${e.y})`;
  }

  p3Click(e:MouseEvent) {
    this.p3.emit(e);
  }
}
