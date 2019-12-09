import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData = {};
  items = {};
  dataFromService: any = '';
  constructor(private userService: UserService,
              private storage: Storage,
              private router: Router,
              private toastController: ToastController) {
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Welcome.',
      duration: 2000
    });
    toast.present();
  }

  login() {
    this.userService.login(this.userData).subscribe((response) => {
      this.dataFromService = JSON.stringify(response);
      const decoded = jwt_decode(this.dataFromService);
      this.items = {
        token: this.dataFromService,
        userId: decoded.user_id
      };
      this.storage.set('token', response);
      this.userService.getUserData(decoded.user_id).subscribe((res) => {
        this.userData = res;
        this.storage.set('userData', this.userData);
      });
      this.router.navigate(['/tabs']);
      this.presentToast();
    });
  }
  ngOnInit() {
  }

}
