import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name:'Laptop',
      price: 34000
    },
    {
      id: 2,
      name:'SMarphone',
      price: 23000
    },
    {
      id: 3,
      name:'Headphones',
      price: 9000
    }
  ]

  selectedProduct = this.products[0]  // default

  selectProduct(product:any){
      this.selectedProduct = product
  }
  cart: any[] = [];

  handleAddToCart(product:any){
    this.cart.push(product)
    alert(`${product.name} is added to cart `)
  }
}
