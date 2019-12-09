import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NavController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userData = {};
  dataFromService: any = '';
  constructor(public userService: UserService, public location: Location, public toastController: ToastController) {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Succesfully Registered.',
      duration: 2000
    });
    toast.present();
  }

  register() {
    this.userService.register(this.userData).subscribe((response) => {
      this.dataFromService = JSON.stringify(response);
      this.location.back();
      this.presentToast();
    });
  }
  ngOnInit() {
  }
}
