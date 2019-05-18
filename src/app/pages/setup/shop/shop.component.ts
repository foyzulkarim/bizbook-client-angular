import { ShopService } from './../../../_services/shop.service';
import { Shop } from './../../../_models/shop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  shops: Shop[] = [];
  constructor(public shopService: ShopService, private router: Router) {
    this.shops = this.shopService.getBrnads();
    console.log(this.shops);
  }

  ngOnInit() {
  }
  addBrnadLink() {
    this.router.navigate(['pages/setup/shopentry']);

  }

}
