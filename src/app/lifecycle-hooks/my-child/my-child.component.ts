import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-child',
  templateUrl: 'my-child.component.html',
  styleUrls: ['my-child.component.css']
})
export class MyChildComponent {
  hero = 'Magneto'
}
