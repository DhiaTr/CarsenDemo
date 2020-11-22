import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InvalidData } from '../common/invalid-data';
import { AppError } from '../common/app-error';
import { AgentNotExistant } from '../common/agent-not-existant';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient, private auth:AuthService) { }

  deleteOne(id) {
    return this.http.delete( this.auth.address + '/api/agents/' + id, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getOne(id) {
    return this.http.get(this.auth.address + '/api/agents/' + id, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  update(id, agentData) {
    return this.http.put(this.auth.address + '/api/agents/' + id, agentData, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  addOne(agentData) {
    return this.http.post(this.auth.address + '/api/agents/', agentData, this.getHeader())
      .pipe(catchError(this.handleError));
  }

  getAll() {
    return this.http.get(this.auth.address + '/api/agents/', this.getHeader())
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
      return throwError(new AgentNotExistant(error));
    return throwError(new AppError(error));
  }
}
