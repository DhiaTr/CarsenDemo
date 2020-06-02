import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { AgentService } from '../services/agent.service';
import { InvalidData } from '../common/invalid-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.sass']
})
export class AgentFormComponent implements OnInit {

  bases;
  agent;
  updated = false;
  Added = false;

  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService,
    private agentService: AgentService
  ) { }

  ngOnInit() {
    this.baseService.getAll().subscribe(result => {
      this.bases = result;
    });
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.agentService.getOne(id).subscribe(result => this.agent = result);
  }

  submit(form) {
    if (this.agent)
      this.update(form);
    else
      this.add(form);
  }

  update(form) {
    this.agentService.update(this.agent._id, form.value).subscribe(result => {
      this.updated = true;
    },
      err => {
        if (err instanceof InvalidData)
          form.form.setErrors({ invalidData: true });
        else
          form.form.setErrors({ unknownError: true });
      });
    console.log(form.value);
  }

  add(form) {
    this.agentService.addOne(form.value).subscribe(result => {
      this.Added = true;
    },
      err => {
        if (err instanceof InvalidData)
          form.form.setErrors({ invalidData: true });
        else
          form.form.setErrors({ unknownError: true });
      });
  }

  DismissSuccessMessage() {
    this.Added = false;
    this.updated = false;
  }


}
