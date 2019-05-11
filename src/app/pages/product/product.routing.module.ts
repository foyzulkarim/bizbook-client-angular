import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { GroupComponent } from './group/group.component';
import { ProductEntryComponent } from './productEntry/productEntry.component';
const routes: Routes = [{
    path: '',
    component: ProductComponent,
    children: [
        {
            path: 'group',
            component: GroupComponent,
        },
        {
            path: 'productEntry',
            component: ProductEntryComponent,
        },

    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }
