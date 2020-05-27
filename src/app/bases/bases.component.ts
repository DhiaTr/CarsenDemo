import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.sass']
})
export class BasesComponent implements OnInit {
  bases;

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.baseService.getAll().subscribe(result => {
      this.bases = result;
    });
  }

}
