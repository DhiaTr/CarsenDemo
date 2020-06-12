import { Component, OnInit } from '@angular/core';
import { RepairsService } from '../services/repairs.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.sass']
})
export class RepairsComponent implements OnInit {

  constructor(private repairSerice: RepairsService) { }

  ngOnInit() {
    this.repairSerice.getAll()
      .subscribe(result => console.log(result));
  }

}
