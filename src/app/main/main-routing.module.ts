import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BasesComponent } from './bases/bases.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentFormComponent } from './agent-form/agent-form.component';
import { CarsComponent } from './cars/cars.component';
import { CarFormComponent } from './car-form/car-form.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientsComponent } from './clients/clients.component';
import { MechanicFormComponent } from './mechanic-form/mechanic-form.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { RepairFormComponent } from './repair-form/repair-form.component';
import { RepairsComponent } from './repairs/repairs.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderArchiveComponent } from './order-archive/order-archive.component';
import { MainComponent } from './main.component';
import { AdminGuard } from './services/admin-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/main/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'categorys', component: CategoriesComponent },
      { path: 'bases', component: BasesComponent },
      { path: 'newBase/:id', component: BaseFormComponent, canActivate: [AdminGuard] },
      { path: 'newBase', component: BaseFormComponent, canActivate: [AdminGuard] },
      { path: 'agents', component: AgentsComponent, canActivate: [AdminGuard] },
      { path: 'agentForm/:id', component: AgentFormComponent, canActivate: [AdminGuard] },
      { path: 'agentForm', component: AgentFormComponent, canActivate: [AdminGuard] },
      { path: 'cars', component: CarsComponent },
      { path: 'carForm/:id', component: CarFormComponent },
      { path: 'carForm', component: CarFormComponent },
      { path: 'clientForm/:id', component: ClientFormComponent },
      { path: 'clientForm', component: ClientFormComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'mechanicsForm/:id', component: MechanicFormComponent, canActivate: [AdminGuard] },
      { path: 'mechanicsForm', component: MechanicFormComponent, canActivate: [AdminGuard] },
      { path: 'mechanics', component: MechanicsComponent, canActivate: [AdminGuard] },
      { path: 'repairForm/:id', component: RepairFormComponent, canActivate: [AdminGuard] },
      { path: 'repairForm', component: RepairFormComponent, canActivate: [AdminGuard] },
      { path: 'repairs', component: RepairsComponent, canActivate: [AdminGuard] },
      { path: 'orders', component: OrdersComponent },
      { path: 'orderForm/:id', component: OrderFormComponent, canActivate: [AdminGuard] },
      { path: 'orderForm', component: OrderFormComponent },
      { path: 'ordersArchive', component: OrderArchiveComponent, canActivate: [AdminGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
