import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { MechanicsService } from '../services/mechanics.service';

@Component({
  selector: 'mechanic-form',
  templateUrl: './mechanic-form.component.html',
  styleUrls: ['./mechanic-form.component.sass']
})
export class MechanicFormComponent implements OnInit {
  bases;
  Added = false;
  constructor(
    private baseService: BaseService,
    private mechanicService: MechanicsService
  ) { }

  ngOnInit() {
    this.baseService.getAll()
      .subscribe(result => this.bases = result);
  }

  submit(form) {
    this.mechanicService.add(form.value)
      .subscribe(
        result => this.Added = true,
        error => form.form.setErrors({ invalidData: true }
        ));
  }

  // set unknown error and invalid data error

  DismissSuccessMessage() {
    this.Added = false;
  }

}
