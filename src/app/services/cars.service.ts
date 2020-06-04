import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  add(car) {
    return this.http.post('http://localhost:3000/api/cars/', car, this.getHeader())
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
