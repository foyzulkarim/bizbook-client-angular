import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';

const PAGES_COMPONENTS = [PagesComponent];

@NgModule({
  imports: [PagesRoutingModule, DashboardModule, FormsModule],
  declarations: [...PAGES_COMPONENTS]
})
export class PagesModule {}
