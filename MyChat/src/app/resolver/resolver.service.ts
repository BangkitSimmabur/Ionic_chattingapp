import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { LoadingController } from '@ionic/angular';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(private chatService: ChatService, private loadingController: LoadingController) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');

    let loading: HTMLIonLoadingElement;

    this.loadingController.create({
      message: 'Please wait'
    }).then(res => {
      loading = res;
      loading.present();
    });

    return this.chatService.getMessages(id).pipe(
      tap(() => {
        loading.dismiss();
      })
    );
  }
}
