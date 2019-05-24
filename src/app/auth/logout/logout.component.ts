import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ngx-login',
  template: `
    logout...
  `
})
export class NgxLogoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.authService.signout();
    this.router.navigateByUrl('/login');
  }
}
