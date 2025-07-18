import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit  {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();  // this will loading all the predefined products from the service class
  }
  
//   **Explanation:
// goToDetails() uses Angular's Router to navigate to dynamic detail route
  goToDetails(id: number) {
    this.router.navigate(['/products', id]);
  }


}
