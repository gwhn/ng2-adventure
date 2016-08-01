import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'child-event-producer',
  templateUrl: 'child-event-producer.component.html',
  styleUrls: ['child-event-producer.component.css']
})
export class ChildEventProducerComponent {

  @Output() click:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  pClick(e:MouseEvent) {
    this.click.emit(e);
  }
}
