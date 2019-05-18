import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  photourl = new BehaviorSubject<string>('../../assets/user.png');
  decodedToken: any;
  currentUserName: string
  constructor(private http: HttpClient, private router: Router) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'token', model).pipe(
      map((response: any) => {
        const user = response;
        console.log('response', response);
        if (user) {
          localStorage.setItem('token', user.access_token);
          localStorage.setItem('userName', JSON.stringify(user.userName));

          this.decodedToken = this.jwtHelper.decodeToken(user.access_token);

        }
      })
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    this.currentUserName = localStorage.getItem('userName');
    return !this.jwtHelper.isTokenExpired(token);
  }
  logout() {
    alert('logout');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.decodedToken = null;

    this.router.navigate(['/loginnew']);
  }



}
