import { Product } from './shared/models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  addToLocalStorage(product: Product){
    let list: Product[] = JSON.parse(localStorage.getItem("products") ?? "[]");
    list.push(product);
    localStorage.setItem("products", JSON.stringify(list))
  }

  loadFromLocalStorage(): Product[] {
    return JSON.parse(localStorage.getItem("products") ?? "[]");
  }

  loadToLocalStorage(products: Product[]){
    localStorage.setItem("products", JSON.stringify(products))
  }

  loadProduct(id: string) {
    let list: Product[] = JSON.parse(localStorage.getItem('products') ?? "[]")
    return list.find(t => t.id == id)
  }

  searchProduct(text: string){
    let list: Product[] = JSON.parse(localStorage.getItem('products') ?? "[]")
    return list.filter(t => t.name.includes(text))
  }
}
