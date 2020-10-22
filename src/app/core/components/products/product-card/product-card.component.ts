import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() description: string;
  @Input() prize: number;
  @Input() src: string;
  @Input() quantity: number;

  @Output() parametroSalida = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementarCantidad() {
    console.log('Incrementar cantidad', this.quantity);
    this.quantity = this.quantity + 1;
    this.parametroSalida.emit(this.quantity);
    console.log('Incrementada cantidad', this.quantity);
  }

}
