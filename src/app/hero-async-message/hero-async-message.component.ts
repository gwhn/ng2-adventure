import { Component } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'hero-message',
  templateUrl: 'hero-async-message.component.html',
  styleUrls: ['hero-async-message.component.css']
})
export class HeroAsyncMessageComponent {

  message$: Observable<string>;

  private messages = [
    'You are my hero',
    'You are the best',
    'Will you be my hero?'
  ];

  constructor() {
    this.resend();
  }

  resend() {
    this.message$ = Observable.interval(1000)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }

}
