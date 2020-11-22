import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private auth:AuthService) { }

  getAll() {
    return this.http.get(this.auth.address + '/api/orders', this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getOne(id) {
    return this.http.get(this.auth.address + '/api/orders/' + id, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  add(order) {
    return this.http.post(this.auth.address + '/api/orders', order, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  update(id, order) {
    return this.http.put(this.auth.address + '/api/orders/' + id, order, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.auth.address + '/api/orders/' + id, this.getHeader())
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
