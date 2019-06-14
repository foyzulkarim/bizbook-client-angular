import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing.module';
import { GroupComponent } from './group/group.component';
import { ProductEntryComponent } from './productEntry/productEntry.component';
import { BrandEntryComponent } from './brand/entry/brand-entry.component';
import { BrandListComponent } from './brand/list/brand-list.component';

const COMPONENTS = [
  ProductComponent,
  GroupComponent,
  ProductEntryComponent,
  BrandEntryComponent,
  BrandListComponent
];

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [CommonModule, FormsModule, ProductRoutingModule],
  declarations: [...COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class ProductModule {}
