import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient, private toastController: ToastController) { }

  private url = '/api/';


  create(data) {
    return this.http.post(this.url + 'rooms', { room_name: data }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.presentToast('Cannot create room, please fill another name for room');
        }
        return throwError(error);
      })
    );
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  getRoom() {
    return this.http.get(this.url + 'rooms').pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.presentToast('You have to Login first');
        }
        return throwError(error);
      })
    );
  }

  addMember(data, data2) {
    return this.http.post(this.url + 'members', { room_id: data, user_id: data2 });
  }
}
