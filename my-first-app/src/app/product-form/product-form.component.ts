import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  product = new Product();

  onSubmit(form:any) {
    if(form.valid){
       console.log(' product is submitted', this.product)
       //form.resetForm()
    }
  }
}
