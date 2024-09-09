import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../Services/category.service';
import { log } from 'console';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Icategory } from '../../../../Interfaces/icategory';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.css',
})
export class CategorySliderComponent implements OnInit {
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
      320: {
        items: 8,
      },
      980: {
        items: 10,
      },
    },
    margin: 5,
  };
  categoriesList: Icategory[] = [];
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.categoriesList = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
