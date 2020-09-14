import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password = new FormControl('', []);
  public username = new FormControl('', []);

  constructor(private loginService: LoginService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    // Check if user is already logged in
    if (this.cookieService.get('authorization')) {
      this.router.navigate(['dashboard']);
    }
  }

  public login(): void {
    this.loginService.login(this.username.value, this.password.value).subscribe(res => {
      if (res.headers.get('Authorization')) {
        this.cookieService.set('authorization', res.headers.get('Authorization'));
        this.router.navigate(['dashboard']);
      } else {
        // TODO: Handle error with login
      }
    });
  }
}
