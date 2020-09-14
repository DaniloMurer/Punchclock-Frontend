import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entry} from '../data/entry';
import {getEntryUrl} from '../common/url';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http: HttpClient) { }

  public getAllEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(getEntryUrl());
  }
  public createEntry(entry: Entry): Observable<any> {
    return this.http.post(getEntryUrl(), entry, {observe: 'response'});
  }
}
