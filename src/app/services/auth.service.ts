import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
          self.accountInfo = new UserInfo();
          self.accountInfo.userName = result.data.userName;
          self.accountInfo.id = result.data.id;
          self.accountInfo.role = result.data.role;
          self.accountInfo.authToken = result.data.AuthToken;
          self.accountInfo.accessToken = result.data.access_token;
          self.accountInfo.isAuth = true;
          self.accountInfo.connectionId = '';
          self.accountInfo.shopId = result.data.shopId;
          self.accountInfo.warehouseId = result.data.warehouseId;
          self.accountInfo.resources = JSON.parse(result.data.resources);
          self.accountInfo.defaultRoute = result.data.defaultRoute;
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
  //    //self.UserInfo.Routes = result.data.Routes;
  //    self.web.get(self.url.sideMenuUrl).then(result => {
  //        console.log(result);
  //        self.accountInfo.routes = result.data;
  //    }, error => {
  //        console.log(error);
  //    });
  //}

  register(request: RegisterRequest): Observable<any> {
    var self = this;
    self.signout();

    return self.webService.post(self.urlService.registerUrl, request).pipe(
      tap(
        (result: any): any => {
          var response = new RegisterResponse(true, result.data, 'Success');
          response.userName = result.data.userName;
          response.isRegistered = true;
        }
      )
    );
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
