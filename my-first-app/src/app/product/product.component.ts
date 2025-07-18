import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    isShow: boolean = true
    status: 'in-stock' | 'out-of-stock' | undefined

     product: Product[] = [{
      id:101,
      name: 'Wireless headphone',
      price:  1000.00,
      description : 'Good Quality',
      status : 'in-stock',
     },
     {
      id:102,
      name: 'Mobile phone',
      price:  5000.00,
      description : 'Mobile',
      status : 'in-stock'
     },
     {
      id:103,
      name: 'microwave',
      price:  10000.00,
      description : 'Good Quality',
      status : 'out-of-stock',
     }]
}
