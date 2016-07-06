import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';
import { ProductImageComponent } from '../product-image';
import { ProductDepartmentComponent } from '../product-department';
import { ProductPriceComponent } from '../product-price';

@Component({
  moduleId: module.id,
  selector: 'product-row',
  templateUrl: 'product-row.component.html',
  styleUrls: ['product-row.component.css'],
  inputs: ['product'],
  directives: [
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductPriceComponent
  ],
  host: {
    class: 'product-item'
  }
})
export class ProductRowComponent implements OnInit {

  product: ProductModel;

  constructor() {}

  ngOnInit() {
  }

}
