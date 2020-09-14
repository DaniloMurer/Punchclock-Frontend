import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {EntryService} from '../../service/entry.service';
import {Category} from '../../data/category';
import {CategoryService} from '../../service/category.service';
import {Entry} from '../../data/entry';
import {DateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  constructor(private entryService: EntryService, private categoryService: CategoryService, private adapter: DateAdapter<any>) { }

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
  public createEntry(): void {

    const dateStringCheckInDate = new Date(this.checkIn.value.toISOString());
    const dateStringCheckIn = dateStringCheckInDate.toISOString().split('T')[0] + 'T' + this.checkInTime.value.toString();

    const dateStringCheckOutDate = new Date(this.checkOut.value.toISOString());
    const dateStringCheckOut = dateStringCheckOutDate.toISOString().split('T')[0] + 'T' + this.checkOutTime.value.toString();

    const newCategory = new Category();
    newCategory.name = this.category.value.toString();

    const newEntry = new Entry(0, new Date(dateStringCheckIn), new Date(dateStringCheckOut), false, null, newCategory);
    this.entryService.createEntry(newEntry).subscribe(data => {
      console.log(data);
    });
  }

  private generateDateTimeString(date: string, time: string): string {
    const dateArray = date.split(',');
    dateArray[0] = dateArray[0].replace('.', '-');
    dateArray[0] = dateArray[0].replace('.', '-');
    return `${dateArray[0]}T${time}`;
  }
}
