import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';

import { SigninRequest } from '../../model/security.model';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html'
})
export class NgxLoginComponent {
  user: SigninRequest;

  submitted: boolean;

  errors: string[] = [];

  messages: string[] = [];

  constructor(private auth: AuthService, private router: Router) {
    this.user = new SigninRequest('admin@demo1.com', 'Pass@123');
  }

  login() {
    this.auth.signin(this.user).subscribe(
      (result) => {
        this.messages = ['Login Succcessful'];

        this.router.navigateByUrl('/pages');
      },

      (error: any) => {
        if (error.error) {
          this.errors = [];
          for (var key in error.error) {
            this.errors.push(error.error[key]);
          }
        } else {
          this.errors.push('Something bad happened.');
        }
      }
    );
  }
}
