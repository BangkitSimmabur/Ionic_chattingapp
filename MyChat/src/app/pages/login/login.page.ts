import { AuthenticationService } from './../../auth/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData = {
    email: '',
    password: ''
  };
  items = {};
  dataFromService: any = '';
  constructor(
              public router: Router,
              private toastController: ToastController,
              private authenticationService: AuthenticationService) {
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  login() {
    switch (true) {
      case this.userData.email === '' && this.userData.password === '':
        this.presentToast('please fill your email and password');
        break;
      case this.userData.email === '':
        this.presentToast('please fill the email');
        break;
      case this.userData.password === '':
        this.presentToast('please fill the password');
        break;
      default:
        this.authenticationService.login(this.userData);
    }
  }
  ngOnInit() {
  }

}
