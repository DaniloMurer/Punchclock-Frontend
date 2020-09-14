import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {getLoginUrl, getSignUpUrl, getUserUrl} from '../common/url';
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

  public createUser(user: ApplicationUser): Observable<ApplicationUser> {
    return this.http.post<ApplicationUser>(getSignUpUrl(), user);
  }

  public findAll(): Observable<ApplicationUser[]> {
    return this.http.get<ApplicationUser[]>(getUserUrl());
  }

  public deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${getUserUrl()}/${userId}`, {observe: 'response'});
  }
}
