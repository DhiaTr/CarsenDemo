import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { BasesComponent } from './bases/bases.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentFormComponent } from './agent-form/agent-form.component';
import { CarsComponent } from './cars/cars.component';
import { CarFormComponent } from './car-form/car-form.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { MechanicFormComponent } from './mechanic-form/mechanic-form.component';
import { RepairsComponent } from './repairs/repairs.component';
import { RepairFormComponent } from './repair-form/repair-form.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderArchiveComponent } from './order-archive/order-archive.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';
import { BaseService } from './services/base.service';
import { AgentService } from './services/agent.service';
import { CarsService } from './services/cars.service';
import { ClientService } from './services/client.service';
import { MechanicsService } from './services/mechanics.service';
import { OrdersService } from './services/orders.service';
import { OrderArchiveService } from './services/order-archive.service';

@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent,
    CategoriesComponent,
    HomeComponent,
    BasesComponent,
    BaseFormComponent,
    AgentsComponent,
    AgentFormComponent,
    CarsComponent,
    CarFormComponent,
    ClientsComponent,
    ClientFormComponent,
    MechanicsComponent,
    MechanicFormComponent,
    RepairsComponent,
    RepairFormComponent,
    OrdersComponent,
    OrderFormComponent,
    OrderArchiveComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
    // error was here importing another mod router qm
  ],
  providers: [
    AuthService,
    BaseService,
    AgentService,
    CarsService,
    ClientService,
    MechanicsService,
    OrdersService,
    OrderArchiveService
  ],
})
export class MainModule { }
