import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  add(baseInfo) {
    const headerDict = {
      'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWM5MjY1NjVlMzVmNTIyZjhkNzk4NTMiLCJpYXQiOjE1OTAyNDA4NTQsImlzQWRtaW4iOnRydWV9.mlon4y0szZLcfPPQUZTlMWwLW30zwSZDJ9TdErKgink'
    }
    const requestOptions = {
      headers: new Headers(headerDict),
    };
    return this.http.post('http://localhost:3000/api/base', baseInfo, { headers: headerDict }).pipe(catchError(err => throwError('dsfsdf')));
  }
}
