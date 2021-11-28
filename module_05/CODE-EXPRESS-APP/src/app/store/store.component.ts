import { ShoppingService } from './../shopping.service';
import { Product } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

 products: Product[] = [{id: "Xbox One Series X", name: 'Xbox One Series X', price: 99.99, description: 'test-description', imageUrl: 'https://images.kabum.com.br/produtos/fotos/128560/console-microsoft-xbox-series-x-1tb-preto-rrt-00006_1601067029_g.jpg'},
                        {id: "Xiaomi Mi 11", name: 'Xiaomi Mi 11', price: 98.60, description: 'test2-description', imageUrl: "https://a-static.mlcdn.com.br/618x463/smartphone-xiaomi-mi-11-256gb-branco-5g-8gb-ram-tela-681-cam-tripla-selfie-20mp/magazineluiza/228160100/a4d3ca4792b922cc1449f808104c8c45.jpg" },
                        {id: "Nintendo Switch", name: 'Nintendo Switch', price: 325.00, description: 'test2-description', imageUrl: "https://images.kabum.com.br/produtos/fotos/135586/nintendo-switch-32gb-1x-joycon-neon-azul-vermelho-hbdskaba2_1610110214_g.jpg" },
                        {id: "Asus Zephyrus G15", name: 'Asus Zephyrus G15', price: 198.60, description: 'test2-description', imageUrl: "https://m.media-amazon.com/images/I/61OX3JLafUS._AC_SL1000_.jpg"},
                        {id: "Mac Mini (2020)", name: 'Mac Mini (2020)', price: 499.99, description: 'test2-description', imageUrl: "https://cdn1.appsisecommerce.com.br/clientes/cliente10694/produtos/30166/Z1277.jpg"}
                        ]

 productsToDisplay: number = Math.min(this.products.length, 4)
                    
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

}
