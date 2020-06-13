import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/api/orders', this.getHeader())
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete('http://localhost:3000/api/orders/' + id, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  add(order) {
    return this.http.post('http://localhost:3000/api/orders', order, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getHeader() {
    const token = localStorage.getItem('token');
    return { headers: { 'x-auth-token': token } };
  }

  handleError(error) {
    return throwError(new AppError(error));
  }
}
