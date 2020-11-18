import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  user;
  public isMenuCollapsed = true;

  constructor(private auth: AuthService) {
    this.refreshUserState();

  }

  refreshUserState() {
    this.user = this.auth.getCurrentUser();
    console.log(this.user);
  }

  logout() {
    this.auth.logout();
    this.refreshUserState();
  }


}
