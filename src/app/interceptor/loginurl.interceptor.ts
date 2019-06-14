import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginUrlInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqCloned = this.addBearerToken(req);
    console.log('Intercepted!');
    return next.handle(reqCloned);
  }

  addBearerToken(req: HttpRequest<any>) {
    if (req.url.includes('token') || req.url.includes('Register')) {
      return req;
    }
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.accountInfo.accessToken}`
      }
    });

    return modifiedReq;
  }
}
