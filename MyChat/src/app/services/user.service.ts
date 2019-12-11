import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(public http: HttpClient, private toastController: ToastController) { }

  url = '/api/';

  register(data) {
    return this.http.post(this.url + 'users', data).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 422) {
          this.presentToast('Invalid email format, please use the format example@mail.com');
        }
        return throwError(error);
      })
    );
  }
  getUser() {
    return this.http.get(this.url + 'users');
  }
  getUserData(id) {
    return this.http.get(this.url + 'users/' + id);
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
