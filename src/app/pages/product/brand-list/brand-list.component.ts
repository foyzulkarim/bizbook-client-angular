import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Brand} from '../../../_models/brand';
import {BrandService} from '../../../_services/brand.service';
import {NgbdSortableHeader, SortEvent} from '../../../directive/sortable.directive';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
  providers: [BrandService]
})
export class BrandListComponent  {
  brands$: Observable<Brand[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: BrandService) {
    this.brands$ = service.brands$;
    this.total$ = service.total$;
  }


  onSort({column, direction}: SortEvent) {

    console.log("222");

    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  addBrnadLink() {
    //this.router.navigate(['pages/product/bradentry']);

  }

}
