import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup.routing.module';
import { ShopComponent } from './shop/list/shop.component';
import { ShopEntryComponent } from './shop/entry/shop-entry.component';

import { PaginationComponent } from '../../component/pagination/pagination.component';

const COMPONENTS = [
  SetupComponent,
  ShopComponent,
  ShopEntryComponent,
  PaginationComponent
];

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [FormsModule, CommonModule, SetupRoutingModule],
  declarations: [...COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class SetupModule {}
