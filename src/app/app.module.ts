import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HowComponent } from './core/components/how/how.component';
import { ProductsComponent } from './core/components/products/products.component';
import { DetailComponent } from './core/components/detail/detail.component';
import { ProductCardComponent } from './core/components/products/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './core/components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HowComponent,
    ProductsComponent,
    DetailComponent,
    ProductCardComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
