import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  search: string;
  products: Product[];

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('El search es:', params['search']);
      this.search = params['search'];
    });

    if (this.search != null && this.search != '') {
      this.products = this.productsService.findProducts(this.search);
    }
  }

}
