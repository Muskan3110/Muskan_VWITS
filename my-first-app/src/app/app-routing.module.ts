import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  //for simple routing
  // {path: '', component:HomeComponent},
  // {path: 'about', component:AboutComponent},
  // {path: 'contact', component:ContactComponent}

  //differnt tyoes of routing
    {path: 'products', component:ProductsComponent},//static route
    {path: 'products/:id', component:ProductDetailComponent}, //dynamic routre
    {path: '',redirectTo:'/products' ,pathMatch:'full'}, //default route
    {path:'**',redirectTo:'/products'} //wildcard route

//     **Explanation:
// /products: Static route to display all products using ProductsComponent.

// /products/:id: Dynamic route that uses :id as a route parameter (e.g., /products/2) and shows product details.

// '': Default path redirects to /products.

// **: Wildcard for undefined routes → redirects to /products.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
