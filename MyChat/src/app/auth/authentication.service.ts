import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform, ToastController } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
    public http: HttpClient,
    public userService: UserService
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  items: any;
  userData: any;
  dataFromService: any;
  url = '/api/';

  ifLoggedIn() {
    this.storage.get('token').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  getLogin(data) {
    return this.http.post(this.url + 'login', data);
  }

  login(data) {
    this.getLogin(data).subscribe((response) => {
      this.dataFromService = JSON.stringify(response);
      const decoded = jwt_decode(this.dataFromService);
      this.storage.set('token', response);
      this.userService.getUserData(decoded.user_id).subscribe((res) => {
        this.userData = res;
        this.storage.set('userData', this.userData);
      });
      this.router.navigate(['/tabs']);
    });
    this.authState.next(true);
  }

  logout() {
    this.storage.clear().then(() => {
      this.router.navigate(['home']);
      this.authState.next(false);
    });
  }

  getToken() {
    this.storage.get('token');
  }

  isAuthenticated() {
    return this.authState.value;
  }

}
