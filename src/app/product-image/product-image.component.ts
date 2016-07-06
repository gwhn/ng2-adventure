import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'product-image',
  templateUrl: 'product-image.component.html',
  styleUrls: ['product-image.component.css'],
  inputs: ['url']
})
export class ProductImageComponent implements OnInit {

  url: string;
  
  constructor() {}

  ngOnInit() {
  }

}
