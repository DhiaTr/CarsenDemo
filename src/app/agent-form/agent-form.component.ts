import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.sass']
})
export class AgentFormComponent implements OnInit {

  bases;
  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.baseService.getAll().subscribe(result => {
      this.bases = result;
    });
  }

}
