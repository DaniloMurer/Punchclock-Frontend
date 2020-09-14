import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {EntryService} from '../../service/entry.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private entryService: EntryService) { }

  entryId: FormControl = new FormControl('');

  ngOnInit(): void {
  }

  public deleteEntry(): void {
    this.entryService.deleteEntry(this.entryId.value).subscribe(data => {
      console.log(data);
    });
  }

}
