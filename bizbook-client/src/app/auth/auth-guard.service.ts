import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router) {}


  canActivate() {
    return this.authService.isAuthenticated();

    // .subscribe((isAuth) => {
    //    if(  isAuth ){

    //     this.router.navigateByUrl('pages');
    //     return true;

    //    }
    //    this.router.navigateByUrl('/login');
    //    return false;


    //   });
  }
}
