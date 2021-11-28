import { Injectable } from '@angular/core';
import { PersistenceService } from './persistence.service';
import { Product } from './shared/models/product';

const dbUrl = 'http://'

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private persistenceService: PersistenceService) { }

loadCart(): Product[]{
  return this.persistenceService.loadFromLocalStorage('cart')
}

addToCart(product: Product){
  if(!this.verifyCart(product)){
    this.persistenceService.addToLocalStorage(product, 'cart')
  }
}

removeFromCart(product: Product){
  this.persistenceService.removeFromLocalStorage(product.id, 'cart')
}

verifyCart(product: Product): boolean{
  return this.persistenceService.verifyStorage(product, 'cart')
}

}

//   save(product: Product): Observable<Product> {
//     return this.http.post<Product>(dbUrl, product);
//   }

//   editar(filme: Filme): Observable<Filme> {
//     return this.http.put<Filme>(url + filme.id, filme);
//   }

//   listar(config: ConfigPrams): Observable<Filme[]> {
//     const configPrams = this.configService.configurarParametros(config);
//     return this.http.get<Filme[]>(url, {params: configPrams});
//   }

//   visualizar(id: number): Observable<Filme> {
//     return this.http.get<Filme>(url + id);
//   }

//   excluir(id: number): Observable<void> {
//     return this.http.delete<void>(url + id);
//   }
// }
