import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { InvalidData } from '../common/invalid-data';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }


  getAll() {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: { 'x-auth-token': token },
    };
    return this.http.get('http://localhost:3000/api/base', requestOptions)
      .pipe(catchError(this.handleError));
  }

  add(baseInfo) {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: { 'x-auth-token': token },
    };
    return this.http.post('http://localhost:3000/api/base', baseInfo, requestOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(error) {
    if (error.status === 400)
      return throwError(new InvalidData(error));
    return throwError(new AppError(error));
  }
}
