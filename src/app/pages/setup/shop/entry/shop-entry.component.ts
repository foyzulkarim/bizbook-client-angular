import { Router, ActivatedRoute } from '@angular/router';
import { SaveService } from '../../../../services/save.service';
import { UrlService } from '../../../../services/url.service';

import { Shop } from './../../../../model/models';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../common/base.component';
import { SearchService } from '../../../../services/search.service';
import { AuthService } from '../../../../services/auth.service';


@Component({
  selector: 'app-shop-entry',
  templateUrl: './shop-entry.component.html',
  styleUrls: ['./shop-entry.component.scss']
})
export class ShopEntryComponent extends BaseComponent<Shop>
implements OnInit {
model = new Shop();
urlList = new UrlService();

constructor(
  search: SearchService,
  save: SaveService,
  authService: AuthService,
  url: UrlService,
  router: Router,
  private activeRoute: ActivatedRoute
) {
  super(router, url, search, save, authService, url.shop, url.shopQuery);
}

ngOnInit() {
  this.activeRoute.params.subscribe((params) => {
    this.isUpdateMode = false;
    if (params['id']) {
      this.isUpdateMode = true;
      this.edit2(params['id']);
    }
  });
}
}
