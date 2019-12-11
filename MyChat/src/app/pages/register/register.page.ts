import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(public userService: UserService, public location: Location, public toastController: ToastController) {
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  register() {
    switch (true) {
      case this.userData.name === '' && this.userData.email === '' && this.userData.password === '':
        this.presentToast('please fill your name, email and password');
        break;
      case this.userData.email === '' && this.userData.password === '':
        this.presentToast('please fill the email and password');
        break;
      case this.userData.name === '' && this.userData.password === '':
        this.presentToast('please fill the name and password');
        break;
      case this.userData.name === '' && this.userData.email === '':
        this.presentToast('please fill the name and email');
        break;
      case this.userData.name === '':
        this.presentToast('please fill the name');
        break;
      case this.userData.email === '':
        this.presentToast('please fill the email');
        break;
      case this.userData.password === '':
        this.presentToast('please fill the password');
        break;
      default:
        this.userService.register(this.userData).subscribe((response) => {
          if (response) {
            this.presentToast('congratulation ' + this.userData.name + ', you are now registered');
            this.location.back();
          }
        });
    }
  }
  ngOnInit() {
  }
}
