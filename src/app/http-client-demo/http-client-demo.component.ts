import { Component } from '@angular/core';
import {HeroListComponent} from "../hero-list/hero-list.component";
import {WikipediaComponent} from "../wikipedia/wikipedia.component";
import {HeroService} from "../hero.service";

@Component({
  moduleId: module.id,
  selector: 'http-client-demo',
  templateUrl: 'http-client-demo.component.html',
  styleUrls: ['http-client-demo.component.css'],
  directives: [
    HeroListComponent,
    WikipediaComponent
  ],
  providers: [HeroService]
})
export class HttpClientDemoComponent {}
