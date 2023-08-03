import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../core/models/product.model";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit{
  products : Product[] = [];
  constructor(private router : Router,private productService : ProductService) {
  }
  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe({
        next : (products)=>{this.products = products},
        error : (response)=>console.log(response)
      })
  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
        .subscribe(result=>{this.ngOnInit()})
  }

}
