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
    if (!confirm('Are you sure you want to delete this car?')) {
      return;
    }
    this.carService.delete(id)
      .subscribe(result => this.updateView());
  }

}
