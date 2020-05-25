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
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: { 'x-auth-token': token },
    };
    return this.http.post('http://localhost:3000/api/base', baseInfo, requestOptions)
      .pipe(catchError(err => throwError('dsfsdf')));
  }
}
