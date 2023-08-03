import {Component} from '@angular/core';
import {Product} from "../../core/models/product.model";
import {ProductService} from "../products/product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
    newProduct: Product = {
        id: '',
        name: '',
        type: '',
        color: '',
        price: 0
    }

    constructor(private router: Router, private productService: ProductService) {

    }

    addProduct() {
        this.productService.addProduct(this.newProduct).subscribe({
            next: (product) => {
                this.router.navigate(["products"])
            },
            error: (response) => console.log(response)
        })
    }
}
