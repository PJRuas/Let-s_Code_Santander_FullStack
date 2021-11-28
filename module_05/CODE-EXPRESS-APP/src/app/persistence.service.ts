import { Product } from './shared/models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }



  addToLocalStorage(iten: any, key: string){
    let list: any[] = JSON.parse(localStorage.getItem(key) ?? "[]");
    list.push(iten);
    localStorage.setItem(key, JSON.stringify(list))
  }

  loadFromLocalStorage(key: string, defaultList: any[] = []): any[] {
    return JSON.parse(localStorage.getItem(key) ?? JSON.stringify(defaultList));
  }

  loadToLocalStorage(iten: any[], key: string){
    localStorage.setItem(key, JSON.stringify(iten))
  }

  removeFromLocalStorage(id: string, key: string) {
    let list: any[] = JSON.parse(localStorage.getItem(key) ?? "[]")
    localStorage.setItem(key, JSON.stringify(list.filter(i => i.id != id)))
  }

  searchStorage(iten: string, key: string){
    let list: any[] = JSON.parse(localStorage.getItem(key) ?? "[]")
    return list.filter(i => i.name.includes(iten))
  }

  verifyStorage(iten: any, key: string){
    let list = JSON.parse(localStorage.getItem(key) ?? "[]")
    return (iten in list)
  }

  clearStorage(key: string){
    localStorage.setItem(key, "[]")
  }
}
