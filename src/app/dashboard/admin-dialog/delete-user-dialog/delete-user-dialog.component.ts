import { Component, OnInit } from '@angular/core';
import {ApplicationUser} from '../../../data/application-user';
import {LoginService} from '../../../service/login.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.css']
})
export class DeleteUserDialogComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  userId: FormControl = new FormControl('');
  dataSource: ApplicationUser[];
  displayedColumns: string[] = ['id', 'username', 'password', 'role'];

  ngOnInit(): void {
    this.loginService.findAll().subscribe(data => {
      this.dataSource = data;
    });
  }

  public deleteUser() {
    // tslint:disable-next-line:radix
    this.loginService.deleteUser(parseInt(this.userId.value)).subscribe(data => {
      console.log(data);
    });
  }

}
