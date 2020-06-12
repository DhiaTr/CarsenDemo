import { Component, OnInit } from '@angular/core';
import { MechanicsService } from '../services/mechanics.service';
import { CarsService } from '../services/cars.service';
import { RepairsService } from '../services/repairs.service';

@Component({
  selector: 'app-repair-form',
  templateUrl: './repair-form.component.html',
  styleUrls: ['./repair-form.component.sass']
})
export class RepairFormComponent implements OnInit {


  added = false;

  constructor(
    private repairService: RepairsService,
    private mechanic: MechanicsService,
    private carService: CarsService
  ) { }

  mechanics;
  cars;
  ngOnInit() {
    this.mechanic.getAll()
      .subscribe(result => this.mechanics = result);
    this.carService.getAll()
      .subscribe(result => this.cars = result);
  }

  submit(form) {
    this.repairService.add(form.value)
      .subscribe(result => {
        this.added = true;
        form.reset();
      });
  }

  DismissSuccessMessage() {
    this.added = false;
  }

}
