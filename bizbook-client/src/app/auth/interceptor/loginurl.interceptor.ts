import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class LoginUrlInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {

        console.log('Intercepted!', req);
        const reqCloned =  this.handleBodyIn(req, localStorage.getItem('grant_type'),
         'password');
        const copiedReq = reqCloned;
        return next.handle(copiedReq);
      }
      handleBodyIn(req:HttpRequest<any>, tokenToAdd, tokenName) {

        if (!req.url.includes("token")) {

            return req;
        }

        if (req.method.toLowerCase() === 'post') {

            const foo = {}; foo['grant_type'] = 'password';

            console.log(this.serialize({...req.body, ...foo}));
            req =  req.clone({
              body: this.serialize({...req.body, ...foo})
            })

            req = req.clone({ setHeaders: { "Content-Type": "application/x-www-form-urlencoded" } });
        }



        if (req.method.toLowerCase() === 'get') {
          req = req.clone({
            params: req.params.set(tokenName, tokenName)
          });
        }
        return req;
      }

      serialize (form) {

        // Setup our serialized data
        var serialized = [];

        for (var property in form) {

            serialized.push(property+'='+encodeURIComponent(form[property]))
     }
        return serialized.join('&');
    }
    }