import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {

  constructor(private auth: AuthService) { }

  submit(form) {
    this.auth.signup(form).subscribe(result => console.log(result));
  }

}
