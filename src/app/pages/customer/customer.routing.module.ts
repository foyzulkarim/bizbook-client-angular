import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './list/customers.component';
import { CustomerEntryComponent } from './entry/customer.component';
import { CustomerModuleComponent } from './customer.module.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerModuleComponent,
    children: [
      {
        path: 'customerlist',
        component: CustomerComponent
      },
      {
        path: 'customerentry',
        component: CustomerEntryComponent
      },
      {
        path: 'customerdetail/:id',
        component: CustomerEntryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
