import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform, ToastController } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
    private http: HttpClient
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  url = '/api/';

  ifLoggedIn() {
    this.storage.get('token').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  login(data) {
    return this.http.post(this.url + 'login', data,
      { headers: new HttpHeaders({ 'content-Type': 'application/json' }) });

  }

  logout() {
    this.storage.clear().then(() => {
      this.router.navigate(['home']);
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
