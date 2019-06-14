import { SaveService } from './services/save.service';

import { WebService } from './services/web.service';
import { ShopEntryComponent } from './pages/setup/shop/entry/shop-entry.component';
import { BrandListComponent } from './pages/product/brand/list/brand-list.component';

import { LoginComponent } from './pages/login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { BrandEntryComponent } from './pages/product/brand/entry/brand-entry.component';
import { ShopComponent } from './pages/setup/shop/list/shop.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { TestComponent } from './pages/test/test.component';
import { SearchService } from './services/search.service';

import { HttpClientModule } from '@angular/common/http';
import { UrlService } from './services/url.service';
import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BrandEntryComponent,
    BrandListComponent,
    ShopEntryComponent,
    ShopComponent,
    HeaderComponent,
    SidebarComponent,
    TestComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:52894'],
        blacklistedRoutes: ['localhost:52894/api/auth']
      }
    })

  ],
  providers: [
    SearchService,
    WebService,
    SaveService,
    UrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
