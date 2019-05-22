import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: 'app/pages/pages.module#PagesModule'
  },

  { path: '', loadChildren: 'app/auth/auth.module#NgxAuthModule' },
  { path: '**', redirectTo: '/login' }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
