import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgxLoginComponent } from './login/login.component';

import { NgxLogoutComponent } from './logout/logout.component';

import { NgxRegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: NgxLoginComponent
      },
      {
        path: 'register',
        component: NgxRegisterComponent
      },
      {
        path: 'logout',
        component: NgxLogoutComponent
      },

      {
        path: '',
        component: NgxLoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxAuthRoutingModule {}
