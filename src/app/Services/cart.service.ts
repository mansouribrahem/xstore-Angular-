import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { count } from 'console';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  addToCart(id: string): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      {
        productId: `${id}`,
      },
      {
        headers: {
          token: `${localStorage.getItem('userToken')}`,
        },
      }
    );
  }

  getCart(): Observable<any> {
    return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: {
        token: `${localStorage.getItem('userToken')}`,
      },
    });
  }
  removeCartItem(id: string): Observable<any> {
    return this.httpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers: {
          token: `${localStorage.getItem('userToken')}`,
        },
      }
    );
  }
  updateProductCount(id: string, count: number): Observable<any> {
    return this.httpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: `${count}`,
      },
      {
        headers: {
          token: `${localStorage.getItem('userToken')}`,
        },
      }
    );
  }
}
