import { PersistenceService } from './../../../../todo-list-app/src/app/persistence.service';
import { ShoppingService } from './../shopping.service';
import { Product } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItens: Product[] = this.shoppingService.loadCart()
  total: number = 0

  constructor(private shoppingService: ShoppingService,
              private persistenceService: PersistenceService) { 
              }

  ngOnInit(): void {
  }

  removeFromCart(product: Product){
    this.shoppingService.removeFromCart(product)
  }

  getTotalCost(){
    for(let iten of this.cartItens){
      this.total += iten.price
    }
    return this.total
  }

}
