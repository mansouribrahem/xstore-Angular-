import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../Interfaces/iproduct';
import { CartService } from '../../Services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  productId = '';
  product!: Iproduct;
  ngOnInit(): void {
    this.productId = this.route.snapshot.queryParams['id'];
    this.getProductById(this.productId);
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
  getProductById(id: string) {
    this.productService.getProductById(id).subscribe({
      next: (res) => {
        this.product = res.data;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
