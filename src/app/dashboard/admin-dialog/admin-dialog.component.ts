import { Component, OnInit } from '@angular/core';
import {Entry} from '../../data/entry';
import {EntryService} from '../../service/entry.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css']
})
export class AdminDialogComponent implements OnInit {

  constructor(private entryService: EntryService,  private dialog: MatDialog) { }

  dataSource: Entry[];
  displayedColumns: string[] = ['id', 'checkIn', 'checkOut', 'confirmed', 'user', 'category'];

  ngOnInit(): void {
    this.entryService.getAllEntries().subscribe(data => {
      this.dataSource = data;
    });
  }

  public confirmEntry(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(ConfirmDialogComponent, dialogConfig);
  }

}
