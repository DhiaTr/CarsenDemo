import { Component, OnInit } from '@angular/core';
import { OrderArchiveService } from '../services/order-archive.service';

@Component({
  selector: 'app-order-archive',
  templateUrl: './order-archive.component.html',
  styleUrls: ['./order-archive.component.sass']
})
export class OrderArchiveComponent implements OnInit {

  archivedOrders;
  constructor(private archivedOrdersService: OrderArchiveService) { }

  ngOnInit() {
    this.archivedOrdersService.getAll()
      .subscribe(result => this.archivedOrders = result);
  }

}
