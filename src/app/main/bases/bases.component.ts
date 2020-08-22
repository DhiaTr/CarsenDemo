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
    this.updateView();
  }

  updateView() {
    this.baseService.getAll().subscribe(result => {
      this.bases = result;
    });
  }

  delete(id) {
    if (!confirm('Are you sure you want to delete this base?')) {
      return;
    }
    this.baseService.delete(id).subscribe(result => this.updateView());
  }

}
