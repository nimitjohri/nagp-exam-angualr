import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const dashboardRoutes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailComponent},

];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
