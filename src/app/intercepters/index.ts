import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthIntercepter } from './auth';

export const httpInterceptorsProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true}
];