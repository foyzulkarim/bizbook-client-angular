import { Shop } from './../../../../model/models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shops: Shop[] = [];
  constructor( private router: Router) {
    console.log(this.shops);
  }

  ngOnInit() {}
  addBrnadLink() {
    this.router.navigate(['pages/setup/shopentry']);
  }
}
