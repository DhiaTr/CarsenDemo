import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MechanicsService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getAll() {
    return this.http.get(this.auth.address + '/api/mechanics', this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getOne(id) {
    return this.http.get(this.auth.address + '/api/mechanics/' + id, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  update(id, mechanic) {
    return this.http.put(this.auth.address + '/api/mechanics/' + id, mechanic, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  add(mechanic) {
    return this.http.post(this.auth.address + '/api/mechanics', mechanic, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.auth.address + '/api/mechanics/' + id, this.getHeader())
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
