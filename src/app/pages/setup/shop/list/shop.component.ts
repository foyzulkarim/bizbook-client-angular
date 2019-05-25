import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../../../services/search.service';
import { UrlService } from '../../../../services/url.service';

import { Shop } from './../../../../model/models';

import { BaseComponent } from '../../../../common/base.component';


import { SaveService } from '../../../../services/save.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent extends BaseComponent<Shop> implements OnInit {


headers = ['id', 'Name', 'Address', 'modified'];

constructor(
  search: SearchService,
  save: SaveService,
  authService: AuthService,
  url: UrlService,
  router: Router
) {
  super(router, url, search, save, authService, url.shop, url.shopQuery);
}

ngOnInit() {
  this.search();
}

gotoDetails(id: string) {
  this.router.navigateByUrl('/pages/setup/shop/shopdetail/' + id);
}

}
