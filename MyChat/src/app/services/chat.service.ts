import { tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient, private loadingController: LoadingController) { }

  loading: HTMLIonLoadingElement;

  private url = '/api/';

  getMessages(id: string | number) {
    return this.http.get<any>(this.url + 'messages/' + id);
  }

  sendMessages(data: number, data2: string) {
    return this.http.post(this.url + 'messages', { room_id: data, content: data2 });
  }

  deleteMessage(id) {
    this.presentLoading();
    return this.http.delete(this.url + `messages/${id}`).pipe(
      tap(() => {
        this.loading.dismiss();
      })
    );
  }

  presentLoading() {
    this.loadingController.create({
      message: 'Please wait'
    }).then(res => {
      this.loading = res;
      this.loading.present();
    });
  }
}
