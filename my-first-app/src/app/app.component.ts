import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';

   message:string="my-app";
   
  //for employee service
  //  public model:any={}; //to get input data from forms
  //  public source:Array<any> //to store the data from form sto siurce array

//    products: Product[] | undefined;
//    productService: ProductService | undefined;

//    constructor(){
//     this.productService=new ProductService(); //created object of class productService class
    
//    }

//    getProducts(){
//     this.products=this.productService?.getProducts();
//    }

// For Employee Service when takinh input rrom form and diplaying it
//   constructor(public service: EmployeeService){ //Dependancy Injection
//     this.source=this.service.returnEmpData();
//   }

//   public submit():void{
//     if(this.validate()){
//       this.service.addEmpData(this.model);
//       this.reset();
//     }
//   }

//   public reset():void{
//     this.model={}
//   }

//   public validate(): boolean{
//     let status:boolean=true;

//     if(typeof(this.model.name)==="undefined"){
//       alert("Name is required")
//       status=false;
//       return status;
//     }
//     else if(typeof(this.model.city)==="undefined"){
//       alert("City is required")
//       status=false;
//       return status;
//     }
//     return true;
//   }


}
