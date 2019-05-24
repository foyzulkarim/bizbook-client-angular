import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { GroupComponent } from './group/group.component';
import { ProductEntryComponent } from './productEntry/productEntry.component';
import { BrandEntryComponent } from './brand-entry/brand-entry.component';
import { BrandListComponent } from './brand-list/brand-list.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
