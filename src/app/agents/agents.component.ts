import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.sass']
})
export class AgentsComponent implements OnInit {

  agents;

  constructor(private agentsService: AgentService) { }

  ngOnInit() {
    this.updateView();
  }

  updateView() {
    this.agentsService.getAll()
      .subscribe(result => this.agents = result);
  }

  delete(id) {
    this.agentsService.deleteOne(id)
      .subscribe(result => this.updateView());
  }

}
