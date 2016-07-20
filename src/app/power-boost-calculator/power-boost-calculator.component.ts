import { Component } from '@angular/core';
import {ExponentialStrengthPipe} from "../exponential-strength.pipe";

@Component({
  moduleId: module.id,
  selector: 'power-boost-calculator',
  templateUrl: 'power-boost-calculator.component.html',
  styleUrls: ['power-boost-calculator.component.css'],
  pipes: [ExponentialStrengthPipe]
})
export class PowerBoostCalculatorComponent {
  power = 5;
  factor = 1;
}
