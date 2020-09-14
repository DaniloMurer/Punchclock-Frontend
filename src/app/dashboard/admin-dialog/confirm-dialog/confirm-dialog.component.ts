import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {EntryService} from '../../../service/entry.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private entryService: EntryService) { }

  private entryId: FormControl = new FormControl('');

  ngOnInit(): void {
  }

  public confirmEntry() {
    // tslint:disable-next-line:radix
    this.entryService.confirmEntry(parseInt(this.entryId.value)).subscribe(data => {
      console.log(data);
    });
  }

}
