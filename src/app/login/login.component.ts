import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  submit(form) {
    // this.auth.login(form).subscribe(result => console.log(result), err => console.log(err));
    this.auth.login(form).subscribe(result => console.log(result));

  }

}
