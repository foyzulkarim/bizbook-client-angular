import { Brand } from './../_models/brand';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brands: Brand[] = [];
  constructor() { }

  save(brand) {
    this.brands.push(brand);
  }
  getBrnads() {
    return this.brands;
  }
}
