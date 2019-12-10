import { AuthenticationService } from './../../auth/authentication.service';
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
    public router: Router,
    private toastController: ToastController,
    private authenticationService: AuthenticationService) {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Welcome.',
      duration: 2000
    });
    toast.present();
  }

  login() {
    this.authenticationService.login(this.userData);
    this.presentToast();
  }
  ngOnInit() {
  }

}
