import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { CarsService } from '../services/cars.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass']
})
export class OrderFormComponent implements OnInit {

  constructor(
    private orderService: OrdersService,
    private clientService: ClientService,
    private carService: CarsService
  ) { }

  clients;
  cars;
  currentDate;
  added = false;
  RentalEndDateMin;
  ngOnInit() {
    this.clientService.getAll()
      .subscribe(result => this.clients = result);
    this.carService.getAll()
      .subscribe(result => this.cars = result);
    this.currentDate = new Date().toISOString().substring(0, 10);
  }


  submit(form) {
    this.orderService.add(form.value)
      .subscribe(result => {
        this.added = true;
        form.reset();
      });
  }

  getValues(Rent_Start_Date) {
    this.RentalEndDateMin = Rent_Start_Date;
  }

  DismissSuccessMessage() {
    this.added = false;
  }
}
