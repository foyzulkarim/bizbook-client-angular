import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.isSignedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
