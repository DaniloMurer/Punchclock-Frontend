import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Category} from '../../data/category';
import {Entry} from '../../data/entry';
import {EntryService} from '../../service/entry.service';
import {CategoryService} from '../../service/category.service';
import {DateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  constructor(private entryService: EntryService, private categoryService: CategoryService, private adapter: DateAdapter<any>) { }

  entryId: FormControl = new FormControl('')
  checkIn: FormControl = new FormControl('');
  checkInTime: FormControl = new FormControl('');
  checkOut: FormControl = new FormControl('');
  checkOutTime: FormControl = new FormControl('');
  category: FormControl = new FormControl('');

  categories: Category[];

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });

    this.adapter.setLocale('ch');
  }

  public updateEntry(): void {
    const dateStringCheckInDate = new Date(this.checkIn.value.toISOString());
    const dateStringCheckIn = dateStringCheckInDate.toISOString().split('T')[0] + 'T' + this.checkInTime.value.toString();

    const dateStringCheckOutDate = new Date(this.checkOut.value.toISOString());
    const dateStringCheckOut = dateStringCheckOutDate.toISOString().split('T')[0] + 'T' + this.checkOutTime.value.toString();

    const newCategory = new Category();
    newCategory.name = this.category.value.toString();
    console.log(this.entryId.value);
    // tslint:disable-next-line:radix
    const newEntry = new Entry(parseInt(this.entryId.value), new Date(dateStringCheckIn), new Date(dateStringCheckOut), false, null, newCategory);
    this.entryService.updateEntry(newEntry).subscribe(data => {
      console.log(data);
    });
  }

}
