import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { ActivatedRoute } from '@angular/router';
import { InvalidData } from '../common/invalid-data';

@Component({
  selector: 'base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.sass']
})
export class BaseFormComponent implements OnInit {

  Added = false;
  updated = false;
  base;

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.baseService.getOne(id).subscribe(result => this.base = result);
  }

  submit(form) {
    if (this.base)
      this.update(form);
    else
      this.add(form);
  }

  update(form) {
    this.baseService.update(this.base._id, form.value).subscribe(result => {
      this.updated = true;
    }, (err: Response) => {
      if (err instanceof InvalidData) {
        form.form.setErrors({ invalidData: true });
      } else {
        form.form.setErrors({ unknownError: true });
      }
    });
  }

  add(form) {
    this.baseService.add(form.value).subscribe(result => {
      form.reset();
      this.Added = true;
    }, (err: Response) => {
      if (err instanceof InvalidData) {
        form.form.setErrors({ invalidData: true });
      } else {
        form.form.setErrors({ unknownError: true });
      }
    });
  }

  DismissSuccessMessage() {
    this.Added = false;
    this.updated = false;
  }
}
