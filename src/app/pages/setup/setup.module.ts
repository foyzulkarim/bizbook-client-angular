import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup.routing.module';
import { ShopComponent } from './shop/list/shop.component';
import { ShopEntryComponent } from './shop/entry/shop-entry.component';

const COMPONENTS = [SetupComponent, ShopComponent, ShopEntryComponent];

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [FormsModule, SetupRoutingModule],
  declarations: [...COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class SetupModule {}
