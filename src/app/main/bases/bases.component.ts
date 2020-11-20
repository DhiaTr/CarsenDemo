import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.sass']
})
export class BasesComponent implements OnInit {
  bases;
  isAdmin;

  constructor(
    private baseService: BaseService,
    private auth: AuthService
  ) {
    this.isAdmin = auth.isAdmin();
  }

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
