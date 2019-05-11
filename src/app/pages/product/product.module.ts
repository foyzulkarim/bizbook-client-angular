import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing.module';
import { GroupComponent } from './group/group.component';
import { ProductEntryComponent } from './productEntry/productEntry.component';

const COMPONENTS = [

    ProductComponent,
    GroupComponent,
    ProductEntryComponent
];

const ENTRY_COMPONENTS = [

];

@NgModule({
    imports: [
        ThemeModule,
        ProductRoutingModule,

    ],
    declarations: [
        ...COMPONENTS,
    ],
    entryComponents: [
        ...ENTRY_COMPONENTS,
    ],
})
export class ProductModule { }
