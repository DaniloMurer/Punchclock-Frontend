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

  public getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(getEntryUrl());
  }
  public createEntry(entry: Entry): Observable<any> {
    return this.http.post(getEntryUrl(), entry, {observe: 'response'});
  }
  public deleteEntry(entryId: number): Observable<any> {
    return this.http.delete(getEntryUrl() + `/${entryId}`, {observe: 'response'});
  }
  public updateEntry(entry: Entry): Observable<any> {
    return this.http.put(getEntryUrl(), entry);
  }
  public getAllEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(`${getEntryUrl()}/getAll`);
  }
  public confirmEntry(entryId: number): Observable<Entry> {
    return this.http.put<Entry>(`${getEntryUrl()}/confirm/${entryId}`, {});
  }
}
