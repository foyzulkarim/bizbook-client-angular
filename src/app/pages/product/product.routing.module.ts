import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

import { BrandEntryComponent } from './brand/entry/brand-entry.component';
import { BrandListComponent } from './brand/list/brand-list.component';
import { ProductGroupEntryComponent } from './group/entry/product-group-entry.component';
import { ProductGroupListComponent } from './group/list/product-group-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'brandentry',
        component: BrandEntryComponent
      },
      {
        path: 'branddetail/:id',
        component: BrandEntryComponent
      },
      {
        path: 'brandlist',
        component: BrandListComponent
      },
      {
        path: 'productgroupentry',
        component: ProductGroupEntryComponent
      },
      {
        path: 'productgroupdetail/:id',
        component: ProductGroupEntryComponent
      },
      {
        path: 'productgrouplist',
        component: ProductGroupListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
