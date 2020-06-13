import { Component, OnInit } from '@angular/core';
import { RepairsService } from '../services/repairs.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.sass']
})
export class RepairsComponent implements OnInit {

  constructor(private repairSerice: RepairsService) { }

  repairs;
  ngOnInit() {
    this.updateView();
  }

  updateView() {
    this.repairSerice.getAll()
      .subscribe(result => this.repairs = result);
  }

  delete(id) {
    if (!confirm('Are you sure you want to delete this repair?')) {
      return;
    }
    this.repairSerice.delete(id)
      .subscribe(result => this.updateView());
  }
}
