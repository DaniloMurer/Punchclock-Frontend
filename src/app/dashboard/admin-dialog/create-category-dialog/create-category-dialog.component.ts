import { Component, OnInit } from '@angular/core';
import {Category} from '../../../data/category';
import {CategoryService} from '../../../service/category.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.css']
})
export class CreateCategoryDialogComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categoryName: FormControl = new FormControl('');

  ngOnInit(): void {

  }

  public createCategory() {
    const category = new Category();
    category.name = this.categoryName.value.toString();
    this.categoryService.createCategory(category).subscribe(data => {
      console.log(data);
    });
  }

}
