import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';

import {
  UserInfo,
  SigninRequest,
  RegisterRequest,
  RegisterResponse
} from '../model/security.model';

import { UrlService } from './url.service';
import { WebService } from './web.service';
import { LocalStorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accountInfo: UserInfo;

  constructor(
    private http: HttpClient,
    private router: Router,
    private webService: WebService,
    private urlService: UrlService,
    private localStorageService: LocalStorageService
  ) {}

  signin(request: SigninRequest): Observable<any> {
    var self = this;
    self.signout();
    var data = {
      username: request.email,
      password: request.password
    };

    return self.webService.post(self.urlService.signinUrl, data).pipe(
      tap(
        (result: any): any => {
          console.log(result);
          self.accountInfo = new UserInfo();

          self.accountInfo.name = result.name;
          self.accountInfo.userName = result.userName;
          self.accountInfo.id = result.id;
          self.accountInfo.role = result.role;
          self.accountInfo.accessToken = result.access_token;
          self.accountInfo.isAuth = true;
          self.accountInfo.shopId = result.shopId;
          self.accountInfo.resources = JSON.parse(result.resources);
          self.accountInfo.defaultRoute = result.defaultRoute;
          self.localStorageService.save('authorizationData', self.accountInfo);
        }
      )
    );
  }

  signout(): void {
    this.localStorageService.remove('authorizationData');
    this.accountInfo = null;
  }

  updateUserInfo(): void {
    this.localStorageService.save('authorizationData', this.accountInfo);
    this.fillAuthData();
  }

  fillAuthData(): void {
    var authData = this.localStorageService.get('authorizationData');
    if (authData) {
      this.accountInfo = authData as UserInfo;
    }
  }

  isSignedIn(): boolean {
    if (this.accountInfo == null) {
      return false;
    }
    return this.accountInfo.isAuth;
  }

  //loadMenu(): void {
  //    var self = this;
  //    //self.UserInfo.Routes = result.Routes;
  //    self.web.get(self.url.sideMenuUrl).then(result => {
  //        console.log(result);
  //        self.accountInfo.routes = result;
  //    }, error => {
  //        console.log(error);
  //    });
  //}

  register(request: RegisterRequest): Observable<any> {
    var self = this;
    self.signout();

    return self.webService.post(self.urlService.registerUrl, request);
  }

  // setDefaultPassword(data: any) : angular.IPromise<any>{
  //     var self = this;
  //     var deffered: angular.IDeferred<RegisterResponse> = self.q.defer();
  //     self.web.post(self.url.setDefaultPasswordUrl,data).then((result: any): any =>{
  //         deffered.resolve(result);
  //     }, error=>{
  //         deffered.reject(error);
  //     });

  //     return deffered.promise;
  // }
}
