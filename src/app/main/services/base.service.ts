import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { InvalidData } from '../common/invalid-data';
import { BaseNotExistant } from '../common/base-not-existant';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient, private auth: AuthService) { }


  delete(id) {
    return this.http.delete(this.auth.address + '/api/base/' + id, this.getHeader())
      .pipe(catchError(this.handleError));
  }


  getAll() {
    return this.http.get(this.auth.address + '/api/base', this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getOne(id) {
    return this.http.get(this.auth.address + '/api/base/' + id, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getHeader() {
    const token = localStorage.getItem('token');
    return { headers: { 'x-auth-token': token } };
  }

  add(baseInfo) {
    return this.http.post(this.auth.address + '/api/base', baseInfo, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  update(id, baseInfo) {
    return this.http.put(this.auth.address + '/api/base/' + id, baseInfo, this.getHeader())
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
