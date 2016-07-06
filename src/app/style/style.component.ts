import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-style',
  templateUrl: 'style.component.html',
  styleUrls: ['style.component.css']
})
export class StyleComponent implements OnInit {

  color: string;
  fontSize: string;

  constructor() {
    this.color = 'black';
    this.fontSize = '12';
  }

  ngOnInit() {
  }

  apply(color: HTMLInputElement, fontSize: HTMLInputElement): void {
    this.color = color.value;
    this.fontSize = fontSize.value;
  }
}
