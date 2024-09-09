import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }
}
