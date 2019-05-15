import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NbLoginComponent,NbTokenService,NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  template: `
    logout...
  `
})
export class NgxLogoutComponent  implements OnInit{

    constructor( private authService: NbAuthService,public nbauth:NbTokenService,private router: Router) {

    }
    ngOnInit() {

        this.nbauth.clear();
        this.router.navigateByUrl('/login');
     }
}