import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { CarsService } from '../services/cars.service';
import { OrdersService } from '../services/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass']
})
export class OrderFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private clientService: ClientService,
    private carService: CarsService
  ) { }

  clients;
  cars;
  currentDate;
  added = false;
  updated = false;
  RentalEndDateMin;
  order;
  ngOnInit() {
    this.clientService.getAll()
      .subscribe(result => this.clients = result);
    this.carService.getAll()
      .subscribe(result => this.cars = result);
    this.currentDate = new Date().toISOString().substring(0, 10);
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.orderService.getOne(id).subscribe(result => {
        this.order = result;
        this.order.Rent_Start_Date = this.order.Rent_Start_Date.substring(0, 10);
        this.order.Rent_End_Date = this.order.Rent_End_Date.substring(0, 10);
      });
  }

  // refactor this code 

  submit(form) {
    if (this.order)
      this.update(form);
    else
      this.add(form);
  }

  add(form) {
    this.orderService.add(form.value)
      .subscribe(result => {
        this.added = true;
        form.reset();
      });
  }

  update(form) {
    this.orderService.update(this.order._id, form.value)
      .subscribe(result => {
        this.updated = true;
        form.reset();
      });
  }

  getValues(rentStartDate) {
    this.RentalEndDateMin = rentStartDate;
  }

  DismissSuccessMessage() {
    this.added = false;
    this.updated = false;
  }
}
