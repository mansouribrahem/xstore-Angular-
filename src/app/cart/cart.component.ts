import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Icart } from '../Interfaces/icart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartDetails: Icart = {} as Icart;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCart().subscribe({
      next: (res) => {
        this.cartDetails = res;
        console.log(this.cartDetails);
      },
    });
  }
  removeCartItem(id: string) {
    this.cartService.removeCartItem(id).subscribe({
      next: (res) => {
        this.cartDetails = res;
      },
    });
  }
  updateProductCount(id: string, count: number) {
    this.cartService.updateProductCount(id, count).subscribe({
      next: (res) => {
        this.cartDetails = res;
      },
    });
  }
}
