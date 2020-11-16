import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { invalidMailOrPassword } from '../main/common/invalid-mail-or-password';
import { AppError } from '../main/common/app-error';
import { throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post('http://localhost:3000/api/auth', credentials).pipe(
      catchError(this.handleError),
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
    return this.http.post('http://localhost:3000/api/agents', clientData).pipe(catchError(this.handleError));
  }

  getCurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken;
  }

  isAdmin() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken.isAdmin;
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const helper = new JwtHelperService();
    return helper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
  }

  handleError(error) {
    if (error.status === 400) {
      console.log('invalid mail or pass');
      return throwError(new invalidMailOrPassword(error));
    }
    return throwError(new AppError(error));
  }

}
