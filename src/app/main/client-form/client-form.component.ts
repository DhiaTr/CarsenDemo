import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.sass']
})
export class ClientFormComponent implements OnInit {

  Added = false;
  updated = false;
  client;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.clientService.getOne(id).subscribe(result => this.client = result);
  }

  submit(form) {
    if (this.client)
      this.update(form);
    else
      this.add(form);
  }

  add(form) {
    this.clientService.add(form.value)
      .subscribe(
        result => this.Added = true,
        error => form.form.setErrors({ invalidData: true })
      );
  }

  update(form) {
    this.clientService.update(this.client._id, form.value)
      .subscribe(
        result => this.updated = true,
        error => form.form.setErrors({ invalidData: true })
      );
  }

  DismissSuccessMessage() {
    this.Added = false;
    this.updated = false;
  }
  // add error handle 

}
