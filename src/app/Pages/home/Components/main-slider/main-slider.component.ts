import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css',
})
export class MainSliderComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
    },
    margin: 2,
  };
  slideData = [
    { id: 1, image: 'assets/best-8-gb-graphics-card-laptops.webp' },
    { id: 2, image: 'assets/How-to-Choose-a-Laptop-August-2023-Gear.webp' },
    { id: 3, image: 'assets/Laptop_Banner_800_X_1067_Mobile.webp' },
    { id: 4, image: 'assets/pexels-craigmdennis-205421.jpg' },
  ];
}
