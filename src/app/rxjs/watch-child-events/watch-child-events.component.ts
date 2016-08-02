import {Component, OnInit, ElementRef, EventEmitter, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import {Observable, Subject, Subscription} from "rxjs/Rx";
import {ChildEventProducerComponent} from "../child-event-producer/child-event-producer.component";
import {LocationService} from "../location.service";

@Component({
  moduleId: module.id,
  selector: 'watch-child-events',
  templateUrl: 'watch-child-events.component.html',
  styleUrls: ['watch-child-events.component.css'],
  directives: [ChildEventProducerComponent],
  providers: [LocationService]
})
export class WatchChildEventsComponent implements OnInit, AfterViewInit, OnDestroy {
  messages:string[] = [];
  p1 = new Subject();
  p2 = new Subject();
  p3:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @ViewChild(ChildEventProducerComponent) child:ChildEventProducerComponent;
  @ViewChild('p4') p4:ElementRef;
  sub:Subscription;

  constructor(private el:ElementRef, private svc:LocationService) {
  }

  ngOnInit() {
    const p0 = this.el.nativeElement.getElementsByClassName('p0')[0];
    if (p0) {
      Observable
        .fromEvent(p0, 'mousemove')
        .sampleTime(1000)
        .subscribe((e:MouseEvent) => {
          this.messages.push(`p0: ${e.type} (${e.x}, ${e.y})`);
        });
    }

    this.p1
      .sampleTime(1000)
      .subscribe((e:MouseEvent) => {
        this.messages.push(`p1: ${e.type} (${e.x}, ${e.y})`);
      });

    this.p2
      .sampleTime(1000)
      .subscribe((e:MouseEvent) => {
        this.messages.push(`p2(event3): ${e.type} (${e.x}, ${e.y})`);
      });

    this.p3
      .sampleTime(1000)
      .subscribe((e:MouseEvent) => {
        this.messages.push(`p3: ${e.type} (${e.x}, ${e.y})`);
      });

    Observable
      .fromEvent(this.p4.nativeElement, 'mousemove')
      .sampleTime(1000)
      .subscribe((e:MouseEvent) => {
        this.messages.push(`p4: ${e.type} (${e.x}, ${e.y})`);
      });

    this.sub = this.svc.stream
      .sampleTime(1000)
      .subscribe((e:{type;x;y;}) => {
        this.messages.push(`p2(service): ${e.type} (${e.x}, ${e.y})`);
      });
  }

  ngAfterViewInit() {
    Observable
      .from(this.child.event2)
      .sampleTime(1000)
      .subscribe((e:MouseEvent) => {
        this.messages.push(`p2(event2): ${e.type} (${e.x}, ${e.y})`);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  p1Handler(e:MouseEvent) {
    this.p1.next(e);
  }

  p2Handler1(e:MouseEvent) {
    this.messages.push(`p2(event1): ${e.type} (${e.x}, ${e.y})`);
  }

  p2Handler3(e:MouseEvent) {
    this.p2.next(e);
  }

  p3Handler(e:MouseEvent) {
    this.p3.emit(e);
  }
}
