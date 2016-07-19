import { Component } from '@angular/core';

import {WikipediaService} from '../wikipedia.service';
import {JSONP_PROVIDERS} from "@angular/http";
import {Observable, Subject} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'wikipedia',
  templateUrl: 'wikipedia.component.html',
  styleUrls: ['wikipedia.component.css'],
  providers: [JSONP_PROVIDERS, WikipediaService]
})
export class WikipediaComponent {

  private searchTermStream = new Subject<string>();

  items: Observable<string[]> = this.searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this.ws.search(term));

  constructor(private ws: WikipediaService) {}

  search(term: string) {
    this.searchTermStream.next(term);
  }

}
