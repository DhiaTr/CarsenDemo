import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.sass']
})
export class AgentFormComponent implements OnInit {

  bases;
  constructor(
    private baseService: BaseService,
    private agentService: AgentService
  ) { }

  ngOnInit() {
    this.baseService.getAll().subscribe(result => {
      this.bases = result;
    });
  }

  submit(form) {
    let err;
    this.agentService.addOne(form.value).subscribe(result => console.log(result), err => { console.log('err'); console.log(err); });
    // console.log(form.value);
  }

}
