import { AuthenticationService } from './../../auth/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( public authenticationService: AuthenticationService) { }

  logOut() {
    this.authenticationService.logout();
  }
  ngOnInit() {
  }

}
