import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bizbooks';
  constructor(public auth: AuthService) { }

  isLoggedIn() {

    return this.auth.isSignedIn();
  }

}
