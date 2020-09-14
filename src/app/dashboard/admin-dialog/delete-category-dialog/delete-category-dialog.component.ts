import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../data/category';

@Component({
  selector: 'app-delete-category-dialog',
  templateUrl: './delete-category-dialog.component.html',
  styleUrls: ['./delete-category-dialog.component.css']
})
export class DeleteCategoryDialogComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  dataSource: Category[];
  displayedColumns: string[] = ['id', 'name'];

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.dataSource = data;
    });
  }
}
