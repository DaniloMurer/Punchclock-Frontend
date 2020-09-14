import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../data/category';
import {getCategoryUrl} from '../common/url';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(getCategoryUrl());
  }

  public createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(getCategoryUrl(), category);
  }

  public deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${getCategoryUrl()}/${categoryId}`, {observe: 'response'});
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(getCategoryUrl(), category);
  }
}
