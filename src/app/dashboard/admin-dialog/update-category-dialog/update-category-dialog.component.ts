import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../data/category';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-update-category-dialog',
  templateUrl: './update-category-dialog.component.html',
  styleUrls: ['./update-category-dialog.component.css']
})
export class UpdateCategoryDialogComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  dataSource: Category[];
  displayedColumns: string[] = ['id', 'name'];
  categoryId: FormControl = new FormControl('');
  categoryName: FormControl = new FormControl('');

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.dataSource = data;
    });
  }

  public updateCategory(): void {
    const category = new Category();
    category.name = this.categoryName.value.toString();
    // tslint:disable-next-line:radix
    category.id = parseInt(this.categoryId.value);

    this.categoryService.updateCategory(category).subscribe(data => {
      console.log(data);
    });
  }

}
