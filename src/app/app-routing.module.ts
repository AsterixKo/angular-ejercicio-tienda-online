import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './core/components/detail/detail.component';
import { HowComponent } from './core/components/how/how.component';
import { ProductsComponent } from './core/components/products/products.component';
import { SearchResultsComponent } from './core/components/search-results/search-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/how', pathMatch: 'full' },
  { path: 'how', component: HowComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'search/:search', component: SearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
