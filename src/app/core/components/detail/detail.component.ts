import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product, ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number;
  product: Product;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('El id es:', params['id']);
      this.id = params['id'];
    });

    //cargamos el producto
    this.product = this.productsService.getProductById(this.id);
  }

}
