import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'product-department',
  templateUrl: 'product-department.component.html',
  styleUrls: ['product-department.component.css'],
  inputs: ['departments']
})
export class ProductDepartmentComponent implements OnInit {

  departments: string[];
  
  constructor() {}

  ngOnInit() {
  }

}
