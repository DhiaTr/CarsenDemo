import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.sass']
})
export class ClientFormComponent {

  Added = false;

  constructor(private clientService: ClientService) { }

  submit(form) {
    this.clientService.add(form.value)
      .subscribe(
        result => this.Added = true,
        error => form.form.setErrors({ invalidData: true })
      );
  }

  DismissSuccessMessage() {
    this.Added = false;
  }
  // add error handle 

}
