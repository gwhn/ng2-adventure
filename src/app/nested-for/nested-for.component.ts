import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nested-for',
  templateUrl: 'nested-for.component.html',
  styleUrls: ['nested-for.component.css']
})
export class NestedForComponent implements OnInit {

  data: Array<Array<number>>;

  constructor() {
    this.data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  }

  ngOnInit() {
  }

}
