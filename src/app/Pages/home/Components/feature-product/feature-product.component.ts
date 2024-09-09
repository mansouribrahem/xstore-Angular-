import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../Services/product.service';
import { Iproduct } from '../../../../Interfaces/iproduct';
import { CartService } from '../../../../Services/cart.service';

@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrl: './feature-product.component.css',
})
export class FeatureProductComponent implements OnInit {
  productsList: Iproduct[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}
  searchKey: string = '';
  ngOnInit(): void {
    this.getProducts();
  }

  addToCart(id: string) {
    this.cartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res, 'caart res');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.productsList = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
