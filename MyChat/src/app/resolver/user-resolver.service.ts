import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any> {

  constructor(private userService: UserService, private loadingController: LoadingController) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');

    let loading: HTMLIonLoadingElement;


    this.loadingController.create({
      message: 'Please wait'
    }).then(res => {
      loading = res;
      loading.present();
    });

    return this.userService.getUserData(id).pipe(
      tap(() => {
        loading.dismiss();
      })
    );
  }
}
