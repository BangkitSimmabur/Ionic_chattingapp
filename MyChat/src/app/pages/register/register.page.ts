import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userData = {};
  dataFromService: any = '';
  constructor(public userService: UserService) {

  }
  register() {
    this.userService.register(this.userData).subscribe((response) => {
      this.dataFromService = JSON.stringify(response);
      console.log(this.dataFromService);
      console.log(response);
    });
  }
  ngOnInit() {
  }
}
