import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../Interfaces/iproduct';

@Pipe({
  name: 'searchProduct',
})
export class SearchProductPipe implements PipeTransform {
  transform(products: Iproduct[], searchKey: string): Iproduct[] {
    if (!products) return [];
    if (!searchKey) return products;
    return products.filter((product) => {
      return product.title.toLowerCase().includes(searchKey.toLowerCase());
    });
  }
}
