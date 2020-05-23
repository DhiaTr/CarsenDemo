import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'new-base-form',
  templateUrl: './new-base-form.component.html',
  styleUrls: ['./new-base-form.component.sass']
})
export class NewBaseFormComponent {

  constructor(private baseService: BaseService) { }

  submit(form) {
    this.baseService.add(form).subscribe(result => console.log(result));
  }
}
