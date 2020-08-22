import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { CarsService } from '../services/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.sass']
})
export class CarFormComponent implements OnInit {
  bases;
  car;
  Added = false;
  updated = false;
  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private carService: CarsService
  ) { }

  ngOnInit() {
    this.baseService.getAll().subscribe(result => {
      this.bases = result;
    });
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.carService.getOne(id).subscribe(result => this.car = result);
  }

  submit(form) {
    if (this.car)
      this.update(form);
    else
      this.add(form);
  }

  add(form) {
    this.carService.add(form.value)
      .subscribe(result => {
        this.Added = true;
      });
  }

  update(form) {
    this.carService.update(this.car._id, form.value)
      .subscribe(result => {
        this.updated = true;
      })
  }

  DismissSuccessMessage() {
    this.Added = false;
    this.updated = false;
  }

}
