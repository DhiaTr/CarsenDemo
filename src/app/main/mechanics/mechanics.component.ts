import { Component, OnInit } from '@angular/core';
import { MechanicsService } from '../services/mechanics.service';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'app-mechanics',
  templateUrl: './mechanics.component.html',
  styleUrls: ['./mechanics.component.sass']
})
export class MechanicsComponent implements OnInit {

  constructor(private mechanicService: MechanicsService) { }

  mechanics;
  ngOnInit() {
    this.updateView();
  }

  updateView() {
    this.mechanicService.getAll().subscribe(result => this.mechanics = result);
    // add error handling
  }

  delete(id) {
    if (!confirm('Are you sure you want to delete this mechanic?')) {
      return;
    }
    this.mechanicService.delete(id)
      .subscribe(result => this.updateView());
  }


}
