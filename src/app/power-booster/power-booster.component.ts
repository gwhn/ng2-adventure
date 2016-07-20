import { Component, OnInit } from '@angular/core';
import {ExponentialStrengthPipe} from "../exponential-strength.pipe";

@Component({
  moduleId: module.id,
  selector: 'power-booster',
  templateUrl: 'power-booster.component.html',
  styleUrls: ['power-booster.component.css'],
  pipes: [ExponentialStrengthPipe]
})
export class PowerBoosterComponent {
}
