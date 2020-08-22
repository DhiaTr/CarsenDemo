import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { MechanicsService } from '../services/mechanics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mechanic-form',
  templateUrl: './mechanic-form.component.html',
  styleUrls: ['./mechanic-form.component.sass']
})
export class MechanicFormComponent implements OnInit {
  bases;
  Added = false;
  updated = false;
  mechanic;
  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private mechanicService: MechanicsService
  ) { }

  ngOnInit() {
    this.baseService.getAll()
      .subscribe(result => this.bases = result);
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.mechanicService.getOne(id).subscribe(result => this.mechanic = result);
  }

  submit(form) {
    if (this.mechanic)
      this.update(form);
    else
      this.add(form);
  }

  add(form) {
    this.mechanicService.add(form.value)
      .subscribe(
        result => this.Added = true,
        error => form.form.setErrors({ invalidData: true }));
  }

  update(form) {
    this.mechanicService.update(this.mechanic._id, form.value)
      .subscribe(
        result => this.updated = true,
        error => form.form.setErrors({ invalidData: true }));
  }

  // set unknown error and invalid data error

  DismissSuccessMessage() {
    this.Added = false;
  }

}
