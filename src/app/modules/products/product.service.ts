import {Injectable} from '@angular/core';
import {Product} from "../../core/models/product.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl: string = "https://localhost:44319"

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/api/products`)
  }

  addProduct(newProduct: Product): Observable<Product> {
    newProduct.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Product>(this.baseUrl + "/api/products", newProduct);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + "/api/products/" + id);
  }

  updateProduct(id: string, updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + "/api/products/" + id, updatedProduct)
  }

  deleteProduct(id: string): Observable<string> {
    return this.http.delete<string>(this.baseUrl + "/api/products/" + id);
  }
}
