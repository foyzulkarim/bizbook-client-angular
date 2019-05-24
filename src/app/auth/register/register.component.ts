import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../model/security.model';

@Component({
  selector: 'ngx-login',
  templateUrl: './register.component.html'
})
export class NgxRegisterComponent {
  user: RegisterRequest;

  submitted: boolean;

  errors: string[] = [];

  messages: string[] = [];

  constructor(private auth: AuthService, private router: Router) {
    this.user = new RegisterRequest('', '', '', '', '', '');
    this.user.shopid = '00000000-0000-0000-0000-000000000001';
    this.user.isActive = '1';
    this.user.roleid = '00000000-0000-0000-0000-000000000001';
  }

  register() {
    this.errors = [];
    this.messages = [];
    this.auth.register(this.user).subscribe(
      (result) => {
        this.messages = ['Registration Succcessful'];

        this.router.navigateByUrl('/login');
      },

      (error: any) => {
        console.log(error);

        if (error.error) {
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
