import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData = {};
  dataFromService: any = '';
  constructor(public userService: UserService) {

  }
  login() {
    this.userService.login(this.userData).subscribe((response) => {
      this.dataFromService = JSON.stringify(response);
      console.log(this.dataFromService);
      console.log(response);
    });
  }
  ngOnInit() {
  }

}
