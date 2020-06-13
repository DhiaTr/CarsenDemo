import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrdersService) { }

  orders;
  ngOnInit() {
    this.updateView();
  }


  updateView() {
    this.orderService.getAll()
      .subscribe(result => this.orders = result);
    // add base and agent to the backend
  }

  delete(id) {
    if (!confirm('Are you sure you want to delete this order?')) {
      return;
    }
    this.orderService.delete(id)
      .subscribe(result => this.updateView());
  }

}
