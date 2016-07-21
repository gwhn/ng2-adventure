import { Component } from '@angular/core';
import {HeroAsyncMessageComponent} from "../hero-async-message/hero-async-message.component";
import {PowerBoostCalculatorComponent} from "../power-boost-calculator/power-boost-calculator.component";
import {PowerBoosterComponent} from "../power-booster/power-booster.component";

@Component({
  moduleId: module.id,
  selector: 'pipe-demo',
  templateUrl: 'pipe-demo.component.html',
  styleUrls: ['pipe-demo.component.css'],
  directives: [
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    HeroAsyncMessageComponent

  ]
})
export class PipeDemoComponent {}
