import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../../../services/search.service';
import { UrlService } from '../../../../services/url.service';

import { BaseComponent } from '../../../../common/base.component';

import { SaveService } from '../../../../services/save.service';
import { AuthService } from '../../../../services/auth.service';
import { Brand } from 'src/app/pages/shops/Model';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
  providers: []
})
export class BrandListComponent extends BaseComponent<Brand> implements OnInit {
  headers = ['id', 'Name', 'Address', 'modified'];

  constructor(
    search: SearchService,
    save: SaveService,
    authService: AuthService,
    url: UrlService,
    router: Router
  ) {
    super(router, url, search, save, authService, url.brand, url.brandQuery);
  }

  ngOnInit() {
    this.search();
  }

  gotoDetails(id: string) {
    this.router.navigateByUrl('/pages/product/branddetail/' + id);
  }
}
