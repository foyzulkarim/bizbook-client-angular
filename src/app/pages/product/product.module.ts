import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing.module';
import { GroupComponent } from './group/group.component';
import { ProductEntryComponent } from './productEntry/productEntry.component';
import { BrandEntryComponent } from './brand-entry/brand-entry.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdSortableHeader } from '../../directive/sortable.directive';

const COMPONENTS = [
  ProductComponent,
  GroupComponent,
  ProductEntryComponent,
  BrandEntryComponent,
  BrandListComponent
];

const DIRECTIVES = [NgbdSortableHeader];

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [ThemeModule, ProductRoutingModule, NgbModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class ProductModule {}
