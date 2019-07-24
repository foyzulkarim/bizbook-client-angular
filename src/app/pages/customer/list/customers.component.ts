import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../../services/search.service';
import { UrlService } from '../../../services/url.service';

import { Customer } from '../../../model/models';

import { BaseComponent } from '../../../common/base.component';

import { SaveService } from '../../../services/save.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomerComponent extends BaseComponent<Customer>
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
      url.customer,
      url.customerQuery
    );
  }

  ngOnInit() {
    this.search();
  }

  gotoDetails(id: string) {
    this.router.navigateByUrl('/pages/customer/' + id);
  }
}
