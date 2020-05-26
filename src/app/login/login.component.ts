import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { invalidMailOrPassword } from '../common/invalid-mail-or-password';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  // form.controls.email.setErrors({ 'invalidMailorPass': true });
  submit(form) {
    console.log(form.form);
    this.auth.login(form.value).subscribe(result => {
      if (result)
        this.router.navigate(['/home']);
    },
      (err: Response) => {
        if (err instanceof invalidMailOrPassword) {
          form.form.setErrors({ 'invalidMailorPass': true });
        } else {
          form.form.setErrors({ 'unknownError': true });
        }
      });
  }


}
