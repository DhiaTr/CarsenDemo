import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  user;
  isAdmin;
  public isMenuCollapsed = true;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.refreshUserState();
    this.isAdmin = auth.isAdmin();
    console.log(this.isAdmin);
  }

  refreshUserState() {
    this.user = this.auth.getCurrentUser();
    console.log(this.user);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
    this.refreshUserState();
  }


}
