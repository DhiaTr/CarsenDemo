import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { BasesComponent } from './bases/bases.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { AuthService } from './services/auth.service';
import { BaseService } from './services/base.service';
import { AgentsComponent } from './agents/agents.component';
import { AgentFormComponent } from './agent-form/agent-form.component';
import { AgentService } from './services/agent.service';
import { CarsComponent } from './cars/cars.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarsService } from './services/cars.service';
import { ClientsComponent } from './clients/clients.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientService } from './services/client.service';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { MechanicFormComponent } from './mechanic-form/mechanic-form.component';
import { MechanicsService } from './services/mechanics.service';
import { RepairsComponent } from './repairs/repairs.component';
import { RepairFormComponent } from './repair-form/repair-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoriesComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
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
    RepairFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AuthService,
    BaseService,
    AgentService,
    CarsService,
    ClientService,
    MechanicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
