import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {getLoginUrl} from '../common/url';
import {ApplicationUser} from '../data/application-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    const user = new ApplicationUser(0, username, password, new Array());
    console.log(user);
    return this.http.post<any>(getLoginUrl(), user, {observe: 'response'});
  }
}
