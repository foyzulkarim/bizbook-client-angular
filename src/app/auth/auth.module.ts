import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';

import { NgxLoginComponent } from './login/login.component';
import { NgxLogoutComponent } from './logout/logout.component';
import { NgxRegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, NgxAuthRoutingModule],
  declarations: [NgxLoginComponent, NgxLogoutComponent, NgxRegisterComponent],
  exports: [NgxLoginComponent, NgxLogoutComponent]
})
export class NgxAuthModule {}
