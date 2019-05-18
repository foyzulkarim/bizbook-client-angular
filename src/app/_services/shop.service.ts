import { Shop } from './../_models/shop';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  shops: Shop[] = [new Shop()];
  constructor() {

  }

  save(shop) {
    this.shops.push(shop);
  }
  getBrnads() {
    return this.shops;
  }

}
