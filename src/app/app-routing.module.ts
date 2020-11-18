import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuard} from "./services/auth-guard.service";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule',
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
