import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.sass']
})
export class CarFormComponent implements OnInit {
  bases;
  Added = false;
  constructor(
    private baseService: BaseService,
    private carService: CarsService
  ) { }

  ngOnInit() {
    this.baseService.getAll().subscribe(result => {
      this.bases = result;
    });
  }

  submit(form) {
    this.carService.add(form.value)
      .subscribe(result => {
        this.Added = true;
      });
  }

  DismissSuccessMessage() {
    this.Added = false;
  }

}
