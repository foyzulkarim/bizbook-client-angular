import { AppComponent } from './app.component';
import { BrandListComponent } from './pages/product/brand/list/brand-list.component';
import { BrandEntryComponent } from './pages/product/brand/entry/brand-entry.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {

    path: '', component: DashboardComponent,
  },
  {
    path: '',
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
        path: 'test',
        component: TestComponent
      }
    ],

  }
  ,

  { path: '**', redirectTo: '', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
