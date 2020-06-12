import { Component, OnInit } from '@angular/core';
import { MechanicsService } from '../services/mechanics.service';
import { CarsService } from '../services/cars.service';
import { RepairsService } from '../services/repairs.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-repair-form',
  templateUrl: './repair-form.component.html',
  styleUrls: ['./repair-form.component.sass']
})
export class RepairFormComponent implements OnInit {


  added = false;
  updated = false;

  constructor(
    private route: ActivatedRoute,
    private repairService: RepairsService,
    private mechanic: MechanicsService,
    private carService: CarsService
  ) { }

  repair;
  mechanics;
  cars;
  ngOnInit() {
    this.mechanic.getAll()
      .subscribe(result => this.mechanics = result);
    this.carService.getAll()
      .subscribe(result => this.cars = result);
    const id = this.route.snapshot.paramMap.get('id');

    if (id)
      this.repairService.getOne(id).subscribe(result => {
        this.repair = result;
        const date = new Date(this.repair.Repair_Date);
        this.repair.Repair_Date = date.toISOString().substring(0, 10);
      });
  }

  submit(form) {
    if (this.repair)
      this.update(form);
    else
      this.add(form);
  }

  update(form) {
    this.repairService.update(this.repair._id, form.value)
      .subscribe(result => {
        this.updated = true;
        form.reset();
      });
  }

  add(form) {
    this.repairService.add(form.value)
      .subscribe(result => {
        this.added = true;
        form.reset();
      });
  }

  DismissSuccessMessage() {
    this.added = false;
    this.updated = false;
  }

}
