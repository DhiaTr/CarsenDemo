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
    this.mechanicService.getAll().subscribe(result => this.mechanics = result);
    // add error handling 
  }

}
