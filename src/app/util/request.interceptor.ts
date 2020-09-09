import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

/**
 * Copyright Energyeet
 *
 * Intercept HTTP Request from the Resta client and modify it
 */
export class AuthenticationInterceptor implements HttpInterceptor{
  constructor(private cookieService: CookieService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookieService.get('authorization');
    if (token) {
      // Clone original request to append new headers
      const clonedRequest = req.clone({
        headers: req.headers.set('Authorization', token).set('Content-Type', 'application/json')
      });
      // Pass the cloned request
      return next.handle(clonedRequest);
    } else {
      // If no token exists in the local storage, just append the content type to the headers
      const clonedRequest = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
      return next.handle(clonedRequest);
    }
  }

}
