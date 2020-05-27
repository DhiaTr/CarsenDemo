import { Component } from '@angular/core';
import { BaseService } from '../services/base.service';
import { Router } from '@angular/router';
import { InvalidData } from '../common/invalid-data';

@Component({
  selector: 'new-base-form',
  templateUrl: './new-base-form.component.html',
  styleUrls: ['./new-base-form.component.sass']
})
export class NewBaseFormComponent {

  Added = false;
  constructor(
    private router: Router,
    private baseService: BaseService
  ) { }


  submit(form) {
    console.log(form);
    this.baseService.add(form.value).subscribe(result => {
      form.reset();
      this.Added = true;
    }, (err: Response) => {
      if (err instanceof InvalidData) {
        form.form.setErrors({ 'invalidData': true });
      } else {
        form.form.setErrors({ 'unknownError': true });
      }
    });
  }

  DismissSuccessMessage() {
    this.Added = false;
  }
}
