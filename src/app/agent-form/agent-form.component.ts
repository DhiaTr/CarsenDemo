import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { AgentService } from '../services/agent.service';
import { InvalidData } from '../common/invalid-data';
import { BaseNotExistant } from '../common/base-not-existant';

@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.sass']
})
export class AgentFormComponent implements OnInit {

  bases;
  Added = false;

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
  }


}
