import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProductModel } from '../product-model';
import { ProductRowComponent } from '../product-row';

@Component({
  moduleId: module.id,
  selector: 'product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'],
  inputs: ['products'],
  outputs: ['onProductSelected'],
  directives: [ProductRowComponent]
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  onProductSelected: EventEmitter<ProductModel>;

  currentProduct: ProductModel;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: ProductModel): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: ProductModel): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
