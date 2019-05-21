import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchService } from '../../../services/search.service';
import { UrlService } from '../../../services/url.service';

import { Brand } from './../../../model/models';
import { BrandService } from '../../../services/brand.service';
import {
  NgbdSortableHeader,
  SortEvent
} from '../../../directive/sortable.directive';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
  providers: [BrandService]
})
export class BrandListComponent implements OnInit {
  brands$: Observable<Brand[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(private service: SearchService, private urlService: UrlService) {}

  ngOnInit() {}

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    //this.service.sortColumn = column;
    //this.service.sortDirection = direction;
  }

  addBrnadLink() {
    //this.router.navigate(['pages/product/bradentry']);
  }
}
