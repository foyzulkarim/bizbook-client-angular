import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CustomerModuleComponent } from './customer.module.component';
import { CustomerRoutingModule } from './customer.routing.module';
import { CustomerComponent } from './list/customers.component';
import { CustomerEntryComponent } from './entry/customer.component';

import { ComponentModule } from '../../component/component.module';

const COMPONENTS = [
  CustomerModuleComponent,
  CustomerComponent,
  CustomerEntryComponent
];

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [FormsModule, CommonModule, CustomerRoutingModule, ComponentModule],
  declarations: [...COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS]
})
export class SetupModule {}
