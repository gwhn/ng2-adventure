import {Component, ElementRef} from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'from-event',
  templateUrl: 'from-event.component.html',
  styleUrls: ['from-event.component.css']
})
export class FromEventComponent {

  message:any;

  constructor(el:ElementRef) {
    const events = [
      'blur',
      'focus',
      'focusin',
      'focusout',
      'load',
      'resize',
      'scroll',
      'unload',
      'click',
      'dblclick',
      'mousedown',
      'mouseup',
      'mousemove',
      'mouseover',
      'mouseout',
      'mouseenter',
      'mouseleave',
      'change',
      'select',
      'submit',
      'keydown',
      'keypress',
      'keyup',
      'error',
      'contextmenu'
    ];

    const eventHandler = (e:Event) => {
      this.message = e.type;
    };

    events.forEach((value) => {
      Observable.fromEvent(el.nativeElement, value).subscribe(eventHandler);
    });
  }
}
