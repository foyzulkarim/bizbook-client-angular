import { ShopService } from './../../../_services/shop.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shop } from '../../../_models/shop';


@Component({
  selector: 'app-shop-entry',
  templateUrl: './shop-entry.component.html',
  styleUrls: ['./shop-entry.component.scss'],
})
export class ShopEntryComponent implements OnInit {

  model = new Shop();
  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit() {
  }
  save() {
    console.log(this.model);
    this.shopService.save(this.model);
    alert('Save');
    this.router.navigate(['pages/setup/shop']);
  }

}
