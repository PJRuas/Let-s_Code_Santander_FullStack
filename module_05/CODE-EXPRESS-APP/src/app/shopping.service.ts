import { Injectable } from '@angular/core';
import { Product } from './shared/models/product';

const dbUrl = 'http://'

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

addToCart(product: Product){
  
}

removeFromCart(product: Product){
  
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
