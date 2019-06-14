import { SidebarComponent } from './../sidebar/sidebar.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    console.log(this.model);
    this.authService.signin(this.model).subscribe(
      next => {
        // this.alertify.success('Logged in successfully');
      },
      error => {
        // this.alertify.error('Logged in fail');
      },
      () => {
        //this.router.navigate(['/members']);
      }
    );
  }
  loggedIn() {
    return this.authService.isSignedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.signout();

  }

}
