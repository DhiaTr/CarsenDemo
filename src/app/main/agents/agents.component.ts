import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.sass']
})
export class AgentsComponent implements OnInit {

  agents;


  constructor(
    private agentsService: AgentService) { }

  ngOnInit() {
    this.updateView();
  }

  updateView() {
    this.agentsService.getAll()
      .subscribe(result => this.agents = result);
  }

  delete(id) {
    if (!confirm('Are you sure you want to delete this agent?')) {
      return;
    }
    this.agentsService.deleteOne(id)
      .subscribe(result => this.updateView());
  }

}
