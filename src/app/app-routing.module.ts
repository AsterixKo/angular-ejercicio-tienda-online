import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './core/components/detail/detail.component';
import { HowComponent } from './core/components/how/how.component';
import { ProductsComponent } from './core/components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/how', pathMatch: 'full' },
  { path: 'how', component: HowComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'detail', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
