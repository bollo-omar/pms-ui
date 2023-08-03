import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/core/models/product.model';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../products/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  updatedProduct: Product = {
    id: '',
    name: '',
    type: '',
    color: '',
    price: 0
  };

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
  }

  updateProduct() {
    this.productService.updateProduct(this.updatedProduct.id, this.updatedProduct)
      .subscribe({
        next : product=> {this.router.navigate(["products"])},
        error : (res)=>console.log(res)
      })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next : (params)=>{
        const id = params.get('id');

        if(id){
          this.productService.getProduct(id)
            .subscribe({
              next : (product)=>{this.updatedProduct = product},
              error : (response)=>console.log(response)
            })
        }
      }
    })
  }
}
