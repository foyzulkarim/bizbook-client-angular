import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: '../app/pages/pages.module#PagesModule'
  },

  { path: '', loadChildren: '../app/auth/auth.module#NgxAuthModule' },
  { path: '**', redirectTo: '/login' }
];

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
