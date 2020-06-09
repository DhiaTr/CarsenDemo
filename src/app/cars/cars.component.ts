import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent implements OnInit {
  cars;
  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.updateView();
  }

  updateView() {
    this.carService.getAll()
      .subscribe(result => this.cars = result);
  }

  delete(id) {
    this.carService.delete(id)
      .subscribe(result => this.updateView());
  }

}
