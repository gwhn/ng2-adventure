import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';
import { ProductListComponent } from '../product-list';

@Component({
  moduleId: module.id,
  selector: 'inventory-app',
  templateUrl: 'inventory-app.component.html',
  styleUrls: ['inventory-app.component.css'],
  directives: [ProductListComponent]
})
export class InventoryAppComponent implements OnInit {

  products: ProductModel[];

  constructor() {
    this.products = [
      new ProductModel('1', 'Apple', 'images/apple.jpg', ['Fruit', 'Fresh'], 0.2),
      new ProductModel('2', 'Rice', 'images/rice.jpg', ['Grocery', 'Dry'], 3.20)
    ];
  }

  ngOnInit() {
  }

  productSelected(product: ProductModel) {
    console.log(`product ${product.name} selected`);
  }
}
