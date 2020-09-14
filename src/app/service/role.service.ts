import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../data/role';
import {getRoleUrl} from '../common/url';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  public getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(getRoleUrl());
  }
}
