import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { httpInterceptorProviders } from './interceptor';

import { AuthGuard } from './auth/auth-guard.service';

import { WebService } from './services/web.service';
import { UrlService } from './services/url.service';
import { SaveService } from './services/save.service';
import { SearchService } from './services/search.service';
import { LocalStorageService } from './services/localstorage.service';
import { AuthService } from './services/auth.service';

import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

import { NgxAuthModule } from './auth/auth.module';

const SERVICES = [
  AuthService,
  WebService,
  UrlService,
  SaveService,
  SearchService,
  LocalStorageService
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxAuthModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    ...SERVICES,
    httpInterceptorProviders,
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppModule {}
