import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.sass']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  clients;
  ngOnInit() {
    this.updateView();
  }

  updateView() {
    this.clientService.getAll()
      .subscribe(result => this.clients = result);
  }


  delete(id) {
    this.clientService.delete(id)
      .subscribe(result => this.updateView());
  }
}
