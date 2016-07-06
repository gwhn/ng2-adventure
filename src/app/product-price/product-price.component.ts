import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'product-price',
  templateUrl: 'product-price.component.html',
  styleUrls: ['product-price.component.css'],
  inputs: ['price']
})
export class ProductPriceComponent implements OnInit {

  price: number;
  
  constructor() {}

  ngOnInit() {
  }

}
