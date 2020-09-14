import { Component, OnInit } from '@angular/core';
import {Entry} from '../../data/entry';
import {EntryService} from '../../service/entry.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {CreateUserDialogComponent} from './create-user-dialog/create-user-dialog.component';
import {DeleteUserDialogComponent} from './delete-user-dialog/delete-user-dialog.component';
import {UpdateUserDialogComponent} from './update-user-dialog/update-user-dialog.component';
import {CreateCategoryDialogComponent} from './create-category-dialog/create-category-dialog.component';
import {DeleteCategoryDialogComponent} from './delete-category-dialog/delete-category-dialog.component';
import {UpdateCategoryDialogComponent} from './update-category-dialog/update-category-dialog.component';

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

  public openConfirmEntryDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(ConfirmDialogComponent, dialogConfig);
  }

  public openCreateUserDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(CreateUserDialogComponent, dialogConfig);
  }

  public openDeleteUserDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(DeleteUserDialogComponent, dialogConfig);
  }

  public openUpdateUserDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(UpdateUserDialogComponent, dialogConfig);
  }

  public openCreateCategoryDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(CreateCategoryDialogComponent, dialogConfig);
  }

  public openDeleteCategoryDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(DeleteCategoryDialogComponent, dialogConfig);
  }

  public openUpdateCategoryDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(UpdateCategoryDialogComponent, dialogConfig);
  }
}
