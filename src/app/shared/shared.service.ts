import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  _data = new BehaviorSubject([]);
  constructor(private http: HttpClient) {}

  getDetails() {
    // const url = `https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json`;
    const url = '/assets/data.json';
    this.http.get<any>(url).subscribe(result => {
      this._data.next(result.groups);
    });
  }
}
