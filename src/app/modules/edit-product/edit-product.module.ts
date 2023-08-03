import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditProductComponent} from "./edit-product.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [EditProductComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EditProductModule { }
