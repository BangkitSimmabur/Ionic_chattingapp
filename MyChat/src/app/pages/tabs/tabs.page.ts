import { AuthenticationService } from './../../auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  userId: number;

  constructor(public authenticationService: AuthenticationService, private storage: Storage) { }

  logOut() {
    this.authenticationService.logout();
  }
  ngOnInit() {
    this.storage.get('userData').then((response) => {
      this.userId = response.id;
    });
  }

}
