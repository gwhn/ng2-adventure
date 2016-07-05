import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'action-links',
  templateUrl: 'action-links.component.html',
  styleUrls: ['action-links.component.css']
})
export class ActionLinksComponent implements OnInit {

  count: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit() {
  }

  inc(): boolean {
    this.count += 1;
    return false;
  }

  dec(): boolean {
    this.count -= 1;
    return false;
  }
}
