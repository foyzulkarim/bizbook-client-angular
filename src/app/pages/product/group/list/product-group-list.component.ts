import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../../../services/search.service';
import { UrlService } from '../../../../services/url.service';

import { BaseComponent } from '../../../../common/base.component';

import { SaveService } from '../../../../services/save.service';
import { AuthService } from '../../../../services/auth.service';
import { ProductGroup } from '../../Model';

@Component({
  selector: 'app-brand-list',
  templateUrl: './product-group-list.component.html',
  styleUrls: ['./product-group-list.component.scss'],
  providers: []
})
export class ProductGroupListComponent extends BaseComponent<ProductGroup>
  implements OnInit {
  headers = ['id', 'Name', 'Address', 'modified'];

  constructor(
    search: SearchService,
    save: SaveService,
    authService: AuthService,
    url: UrlService,
    router: Router
  ) {
    super(
      router,
      url,
      search,
      save,
      authService,
      url.productGroup,
      url.productGroupQuery
    );
  }

  ngOnInit() {
    this.search();
  }

  gotoDetails(id: string) {
    this.router.navigateByUrl('/pages/product/productgroupdetail/' + id);
  }
}
