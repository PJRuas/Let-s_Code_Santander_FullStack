import { Product } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItens: Product[] = [{id: "test2-id", name: 'Xiaomi Mi 11', price: 98.60, description: 'test2-description', imageUrl: "https://a-static.mlcdn.com.br/618x463/smartphone-xiaomi-mi-11-256gb-branco-5g-8gb-ram-tela-681-cam-tripla-selfie-20mp/magazineluiza/228160100/a4d3ca4792b922cc1449f808104c8c45.jpg" },
  {id: "test2-id", name: 'Asus Zephyrus G15', price: 198.60, description: 'test2-description', imageUrl: "https://m.media-amazon.com/images/I/61OX3JLafUS._AC_SL1000_.jpg"},]

  constructor() { }

  ngOnInit(): void {
  }

}
