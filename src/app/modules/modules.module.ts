import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import {SharedModule} from "../shared/shared.module";
import {ProductTableComponent} from "./products/product-table/product-table.component";
import {AddProductModule} from "./add-product/add-product.module";
import {RouterLink} from "@angular/router";
import {EditProductModule} from "./edit-product/edit-product.module";

@NgModule({
  declarations: [
    ProductsComponent,
    ProductTableComponent
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AddProductModule,
    EditProductModule,
    SharedModule,
    RouterLink
  ]
})
export class ModulesModule { }
