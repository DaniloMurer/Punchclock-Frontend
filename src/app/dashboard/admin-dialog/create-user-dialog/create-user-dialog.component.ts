import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Role} from '../../../data/role';
import {RoleService} from '../../../service/role.service';
import {LoginService} from '../../../service/login.service';
import {ApplicationUser} from '../../../data/application-user';
import {wrapWithCurrentZone} from 'zone.js/lib/common/utils';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent implements OnInit {

  password: FormControl = new FormControl('', Validators.min(10));
  username: FormControl = new FormControl('');
  role: FormControl = new FormControl('');
  roles: Role[];
  constructor(private roleService: RoleService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe(data => {
      this.roles = data;
    });
  }

  public createUser(): void {
    const rolesArray = new Set<Role>();
    const newRole = new Role(0, this.role.value, null);
    rolesArray.add(newRole);
    const applicationUser = new ApplicationUser(0, this.username.value, this.password.value, [this.role.value]);
    console.log(applicationUser);
    this.loginService.createUser(applicationUser).subscribe(data => {
      console.log(data);
    });
  }

}
