import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ShopComponent } from './shop/list/shop.component';
import { ShopEntryComponent } from './shop/entry/shop-entry.component';

import { SetupComponent } from './setup.component';

const routes: Routes = [{
    path: '',
    component: SetupComponent,
    children: [
        {
            path: 'shop',
            component: ShopComponent,
        },
        {
            path: 'shopentry',
            component: ShopEntryComponent,
        },

    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SetupRoutingModule { }
