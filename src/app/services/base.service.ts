import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { InvalidData } from '../common/invalid-data';
import { BaseNotExistant } from '../common/base-not-existant';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }


  delete(id) {
    return this.http.delete('http://localhost:3000/api/base/' + id, this.getHeader())
      .pipe(catchError(this.handleError));
  }


  getAll() {
    return this.http.get('http://localhost:3000/api/base', this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getHeader() {
    const token = localStorage.getItem('token');
    return { headers: { 'x-auth-token': token } };
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
    else if (error.status === 404)
      return throwError(new BaseNotExistant(error));
    return throwError(new AppError(error));
  }
}
