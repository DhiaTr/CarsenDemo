import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InvalidData } from '../common/invalid-data';
import { BaseNotExistant } from '../common/base-not-existant';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  addOne(agentData) {
    return this.http.post('http://localhost:3000/api/agents/', agentData, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getHeader() {
    const token = localStorage.getItem('token');
    return { headers: { 'x-auth-token': token } };
  }

  handleError(error) {
    if (error.status === 400)
      return throwError(new InvalidData(error));
    else if (error.status === 404)
      return throwError(new BaseNotExistant(error));
    return throwError(new AppError(error));
  }
}
