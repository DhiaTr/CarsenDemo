import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, switchMap } from 'rxjs/operators';
import { error } from 'util';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post('http://localhost:3000/api/auth', credentials).pipe(
      catchError(err => throwError(err)),
      map((response: any) => {
        const result = response;
        if (result && result.token) {
          localStorage.setItem('token', response.token);
          return true;
        }
        return false;
      }));
  }

  signup(clientData) {
    return this.http.post('http://localhost:3000/api/agents', clientData).pipe(catchError(err => throwError(err)));
  }

}
