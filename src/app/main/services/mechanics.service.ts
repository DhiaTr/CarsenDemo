import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MechanicsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/api/mechanics', this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getOne(id) {
    return this.http.get('http://localhost:3000/api/mechanics/' + id, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  update(id, mechanic) {
    return this.http.put('http://localhost:3000/api/mechanics/' + id, mechanic, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  add(mechanic) {
    return this.http.post('http://localhost:3000/api/mechanics', mechanic, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete('http://localhost:3000/api/mechanics/' + id, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getHeader() {
    const token = localStorage.getItem('token');
    return { headers: { 'x-auth-token': token } };
  }
  // set different types of error
  handleError(error) {
    return throwError(new AppError(error));
  }
}
