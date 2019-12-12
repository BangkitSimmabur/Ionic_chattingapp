import { ToastController, LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient, private toastController: ToastController, private loadingController: LoadingController) { }

  private url = '/api/';

  loading: HTMLIonLoadingElement;

  presentLoading() {
    this.loadingController.create({
      message: 'Please wait'
    }).then(res => {
      this.loading = res;
      this.loading.present();
    });
  }

  create(data) {
    this.presentLoading();
    return this.http.post(this.url + 'rooms', { room_name: data }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.presentToast('Cannot create room, please fill another name for room');
          this.loading.dismiss();
        }
        return throwError(error);
      }),
      tap(() => {
        this.loading.dismiss();
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
    this.presentLoading();
    return this.http.post(this.url + 'members', { room_id: data, user_id: data2 })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 409) {
            this.presentToast('User is already a member');
            this.loading.dismiss();
          }
          return throwError(error);
        }),
        tap(() => {
          this.loading.dismiss();
        })
      );
  }
}
