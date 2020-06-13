import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
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
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categorys', component: CategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'bases', component: BasesComponent },
  { path: 'newBase/:id', component: BaseFormComponent },
  { path: 'newBase', component: BaseFormComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'agentForm/:id', component: AgentFormComponent },
  { path: 'agentForm', component: AgentFormComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'carForm/:id', component: CarFormComponent },
  { path: 'carForm', component: CarFormComponent },
  { path: 'clientForm/:id', component: ClientFormComponent },
  { path: 'clientForm', component: ClientFormComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'mechanicsForm/:id', component: MechanicFormComponent },
  { path: 'mechanicsForm', component: MechanicFormComponent },
  { path: 'mechanics', component: MechanicsComponent },
  { path: 'repairForm/:id', component: RepairFormComponent },
  { path: 'repairForm', component: RepairFormComponent },
  { path: 'repairs', component: RepairsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orderForm/:id', component: OrderFormComponent },
  { path: 'orderForm', component: OrderFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
