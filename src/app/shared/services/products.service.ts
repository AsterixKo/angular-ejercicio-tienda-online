import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];
  constructor() {
    this.products = [
      new Product(1, 'DVDs', 'Discos dvd para grabar', 10, 'assets/image/dvd.png'),
      new Product(2, 'HP PRO M15A Impresora Láser Monocromo', 'Obtenga una impresión rápida que se adapta a su espacio y presupuesto. Produzca continuamente impresiones de calidad profesional. Obtenga un rápido rendimiento con la impresora láser más pequeña del mundo de su categoría y termine rápidamente sus proyectos.', 79.99, 'assets/image/impresora.jpg'),
      new Product(3, 'MSI GL65 Leopard 10SFSK-280XES Intel Core i7-10750H/16GB/1TB SSD/RTX 2070 SUPER/15.6"', 'Prepárate para sentir todo el poder del juego con el potente ordenador portátil de MSI GL65 Leopard 10SEK.', 1599, 'assets/image/portatil.jpg'),
      new Product(4, 'LG 32LK6200PLA 32" LED FullHD Blanca', 'El corazón de la auténtica imagen. El procesador Quad Core trabaja incansablemente para reducir el ruido que distrae, mejorar la nitidez incluso en las imágenes con resolución más baja y aumentarla hasta obtener una calidad de imagen cercana a 4K.', 229.98, 'assets/image/televisor.jpg'),
      new Product(5, 'Samsung Galaxy Tab A 10.1" 2019 32GB Wifi Negra', 'La diversión de nueva generación en forma de tablet. Prepárate para un nuevo nivel de diversión. Hemos creado una tablet versátil, sofisticada y asequible, porque la diversión de nueva generación debe ser para todas las generaciones. Disfruta de un dispositivo Premium a un precio increíble con Galaxy Tab A (2019, 10,1").', 199.50, 'assets/image/tablet.jpg'),
      new Product(6, 'MSI Clutch GM08 Ratón Gaming 4200DPI', 'El ratón gaming Clutch GM08 está diseñado para el gaming con su forma sólida y funciones únicas. Con un preciso Sensor PAW-3519 óptico de hasta 3200 DPI, los gamers tienen más control sobre su juego.', 19.99, 'assets/image/raton.jpg')
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }
}

class Product {
  _id: number;
  _name: string;
  _description: string;
  _prize: number;
  _src: string;
  constructor(id: number, name: string, description: string, prize: number, src: string) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._prize = prize;
    this._src = src,
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get prize(): number {
    return this._prize;
  }

  set prize(prize: number) {
    this._prize = prize;
  }

  get src(): string {
    return this._src;
  }

  set src(src: string) {
    this._src = src;
  }
}