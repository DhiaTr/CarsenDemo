import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { error } from 'util';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post('http://localhost:3000/api/clients/login', credentials).pipe(catchError(err => throwError('dsfsdf')));
  }

  signup(clientData) {
    return this.http.post('http://localhost:3000/api/clients/signup', clientData).pipe(catchError(err => throwError(err)));
  }

}
