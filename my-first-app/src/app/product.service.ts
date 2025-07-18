// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })

// export class ProductService{
    //ths code is for service demo
    //public getProducts(){
        // let products:Product[]; //empty array created

        // products =[
        //     new Product(1,'Memory card',500),
        //     new Product(2,'Pen drive',1000),
        //     new Product(3,'power bank',5000),
        // ]
        
        
        // return products;
    //}
//}

    //for routing we are using this part of service
    import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 699 },
    { id: 3, name: 'Headphones', price: 199 }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}