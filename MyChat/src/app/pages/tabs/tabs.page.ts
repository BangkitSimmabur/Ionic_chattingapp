import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public storage: Storage, public userService: UserService) { }

  logOut() {
    this.storage.clear();
  }
  ngOnInit() {
  }

}
