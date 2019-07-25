import { Router, ActivatedRoute } from '@angular/router';
import { SaveService } from '../../../../services/save.service';
import { UrlService } from '../../../../services/url.service';

import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../common/base.component';
import { SearchService } from '../../../../services/search.service';
import { AuthService } from '../../../../services/auth.service';
import { ProductGroup } from '../../Model';

@Component({
  selector: 'app-brand-entry',
  templateUrl: './product-group-entry.component.html',
  styleUrls: ['./product-group-entry.component.scss']
})
export class ProductGroupEntryComponent extends BaseComponent<ProductGroup>
  implements OnInit {
  model = new ProductGroup();
  urlList = new UrlService();

  constructor(
    search: SearchService,
    save: SaveService,
    authService: AuthService,
    url: UrlService,
    router: Router,
    private activeRoute: ActivatedRoute
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
    this.activeRoute.params.subscribe((params) => {
      this.isUpdateMode = false;
      if (params['id']) {
        this.isUpdateMode = true;
        this.edit2(params['id']);
      }
    });
  }
}
