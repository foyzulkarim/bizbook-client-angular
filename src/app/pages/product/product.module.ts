import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing.module';
import { ProductGroupListComponent } from './group/list/product-group-list.component';
import { ProductGroupEntryComponent } from './group/entry/product-group-entry.component';
import { BrandEntryComponent } from './brand/entry/brand-entry.component';
import { BrandListComponent } from './brand/list/brand-list.component';
import { PaginationComponent } from '../../component/pagination/pagination.component';

const COMPONENTS = [
  ProductComponent,
  ProductGroupListComponent,
  ProductGroupEntryComponent,
  BrandEntryComponent,
  BrandListComponent,
  PaginationComponent
];

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [CommonModule, FormsModule, ProductRoutingModule],
  declarations: [...COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class ProductModule {}
