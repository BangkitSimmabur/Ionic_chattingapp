import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.page.html',
  styleUrls: ['./friendlist.page.scss'],
})
export class FriendlistPage implements OnInit {

  constructor(public storage: Storage, public userService: UserService ) { }

  users: any;

  ngOnInit() {
    this.userService.getUser().subscribe((response) => {
      this.users = response;
    });
  }

}
