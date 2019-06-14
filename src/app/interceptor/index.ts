import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginUrlInterceptor } from './loginurl.interceptor';




export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoginUrlInterceptor, multi: true },

];
