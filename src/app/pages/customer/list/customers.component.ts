import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchService } from '../../../services/search.service';
import { UrlService } from '../../../services/url.service';

import { BaseComponent } from '../../../common/base.component';

import { SaveService } from '../../../services/save.service';
import { AuthService } from '../../../services/auth.service';
import { Customer } from '../Model';

@Component({
  selector: 'app-shop',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomerComponent extends BaseComponent<Customer>
  implements OnInit {
  headers = ['id', 'name', 'email', 'phone', 'totalDue', 'modified'];

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
    console.log(id);
    this.router.navigateByUrl('/pages/customer/customerdetail/' + id);
  }
}
