import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./modules/products/products.component";
import {AddProductComponent} from "./modules/add-product/add-product.component";
import {EditProductComponent} from "./modules/edit-product/edit-product.component";

const routes: Routes = [
  {
    path : "",
    component : ProductsComponent
  },
  {
    path : "products",
    component : ProductsComponent
  },
  {
    path : "product/add",
    component : AddProductComponent
  },
  {
    path : "product/edit/:id",
    component : EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
