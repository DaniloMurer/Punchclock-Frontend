import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {Entry} from '../data/entry';
import {EntryService} from '../service/entry.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateDialogComponent} from './create-dialog/create-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private entryService: EntryService, private cookieService: CookieService, private router: Router, private dialog: MatDialog) { }
  dataSource: Entry[];
  displayedColumns: string[] = ['id', 'checkIn', 'checkOut', 'confirmed', 'user', 'category'];
  isAdmin = false;

  ngOnInit(): void {

    // If the user is not authorized, navigate back to the login screen
    if (!this.cookieService.get('authorization')) {
      this.router.navigate(['login']);
    }

    // Get the entries from user
    this.entryService.getAllEntries().subscribe(data => {
      this.dataSource = data;
    });
  }

  public openCreateEntryDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(CreateDialogComponent, dialogConfig);
  }

  public openUpdateEntryDialog(): void {
    // TODO: Open Dialog
  }

  public openDeleteEntryDialog(): void {
    // TODO: Open Dialog
  }

}
